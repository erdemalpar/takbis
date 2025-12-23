document.addEventListener('DOMContentLoaded', () => {
    // === DEĞİŞKENLER ===
    const loginView = document.getElementById('login-view');
    const anaMasaustu = document.getElementById('ana-masaustu');
    const windowsDesktop = document.getElementById('windows-desktop-view');
    const loginForm = document.getElementById('login-form');
    let currentZIndex = 1000;

    // === PENCERE VE SÜRÜKLEME SİSTEMİ ===
    const baglaSurukleme = (pencere) => {
        const baslik = pencere.querySelector('.pencere-baslik');
        if (!baslik) return;

        let isDragging = false;
        let offset = { x: 0, y: 0 };
        let lastPos = { top: '', left: '', width: '', height: '' };

        // Maximize / Restore İle İlgili Olaylar
        const maximizeRestore = () => {
            if (pencere.classList.contains('maximized')) {
                // Restore (Eski haline getir)
                pencere.classList.remove('maximized');
                pencere.style.top = lastPos.top;
                pencere.style.left = lastPos.left;
                pencere.style.width = lastPos.width;
                pencere.style.height = lastPos.height;
            } else {
                // Maximize (Büyüt)
                lastPos = {
                    top: pencere.style.top,
                    left: pencere.style.left,
                    width: pencere.style.width,
                    height: pencere.style.height
                };
                pencere.classList.add('maximized');
            }
        };

        const maxBtn = baslik.querySelector('.fa-window-maximize');
        if (maxBtn) maxBtn.parentElement.addEventListener('click', maximizeRestore);
        baslik.addEventListener('dblclick', maximizeRestore);

        baslik.addEventListener('mousedown', (e) => {
            if (pencere.classList.contains('maximized')) return; // Maximize iken sürükleme kapalı
            if (e.target.closest('.pencere-kontrolleri')) return; // Butonlara basarken sürükleme

            isDragging = true;
            pencere.style.zIndex = ++currentZIndex;
            offset.x = e.clientX - pencere.offsetLeft;
            offset.y = e.clientY - pencere.offsetTop;
            document.addEventListener('mousemove', moving);
            document.addEventListener('mouseup', stopping);
            e.preventDefault();
        });

        const moving = (e) => {
            if (!isDragging) return;
            pencere.style.left = (e.clientX - offset.x) + 'px';
            pencere.style.top = (e.clientY - offset.y) + 'px';
        };

        const stopping = () => {
            isDragging = false;
            document.removeEventListener('mousemove', moving);
            document.removeEventListener('mouseup', stopping);
        };
    };

    // Mevcut pencereleri sürükleme sistemine dahil et
    document.querySelectorAll('.pencere, .ana-menu-penceresi').forEach(p => baglaSurukleme(p));

    // Pencere Kapatma Butonları (Global)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('pencere-kapat-btn')) {
            const win = e.target.closest('.pencere');
            if (win) win.classList.add('hidden');
        }
    });

    // === DİNAMİK MODÜL YÜKLEME VE PENCERE AÇMA (OLAY DELEGASYONU) ===
    document.addEventListener('click', async (e) => {
        const btn = e.target.closest('[data-open-window]');
        if (!btn) return;

        const winId = btn.getAttribute('data-open-window');
        const moduleUrl = btn.getAttribute('data-module-url');
        const targetWin = document.getElementById(winId);

        if (targetWin) {
            // Eğer modül URL'si varsa içeriği çek ve yükle
            if (moduleUrl) {
                const contentArea = targetWin.querySelector('.pencere-icerik');
                contentArea.innerHTML = '<div style="padding:20px; text-align:center; color:#000080;">Modül yükleniyor...</div>';

                try {
                    const res = await fetch(`${moduleUrl}?t=${Date.now()}`);
                    const html = await res.text();
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const moduleBody = doc.querySelector('body');
                    contentArea.innerHTML = moduleBody ? moduleBody.innerHTML : html;

                    // Yüklenen içerikteki olayları (Accordion/Tabs vb.) bağla
                    baglaModulIciOlaylar(contentArea);
                } catch (err) {
                    contentArea.innerHTML = `<div style="padding:20px; color:red;">Modül yükleme hatası: ${err}</div>`;
                }
            }

            targetWin.classList.remove('hidden');
            targetWin.style.display = 'block';
            targetWin.style.zIndex = ++currentZIndex;

            // Pencereyi hafif kaydırarak aç (cascade etkisi)
            targetWin.style.top = (60 + (currentZIndex % 20 * 10)) + 'px';
            targetWin.style.left = (60 + (currentZIndex % 20 * 10)) + 'px';
        }

        // Menüyü kapat
        const rootBtn = btn.closest('.menu-ikonu-buton');
        if (rootBtn) rootBtn.classList.remove('aktif');
        e.stopPropagation();
    });

    // Modül içindeki özel kontrolleri (TAKBİS Form Logic) bağlayan fonksiyon
    function baglaModulIciOlaylar(container) {
        // 1. Accordion (TF0124 vb)
        container.querySelectorAll('.tf-acc-header').forEach(header => {
            header.addEventListener('click', () => {
                const body = header.nextElementSibling;
                const isCurrentlyShown = body && !body.classList.contains('hidden');

                // Tekil açılma mantığı (Resim hiyerarşisi için)
                container.querySelectorAll('.tf-acc-body').forEach(b => b.classList.add('hidden'));
                if (!isCurrentlyShown && body) body.classList.remove('hidden');
            });
        });

        // 5. Mahalle Sorgu Mantığı (TF0180)
        const btnMahalleCalistir = container.querySelector('#btn-mahalle-calistir');
        if (btnMahalleCalistir) {
            btnMahalleCalistir.addEventListener('click', () => {
                const listTab = container.querySelector('.tab[data-tab="liste"]');
                const kriterPane = container.querySelector('#pane-kriter');
                const listePane = container.querySelector('#pane-liste');

                if (listTab) {
                    container.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    listTab.classList.add('active');
                }
                if (kriterPane) kriterPane.classList.add('hidden');
                if (listePane) listePane.classList.remove('hidden');

                const tbody = container.querySelector('#mahalle-table-body');
                const statusCount = container.querySelector('#status-count');

                if (tbody) {
                    tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px;">Veriler sorgulanıyor...</td></tr>';

                    setTimeout(() => {
                        if (typeof mahalleVeritabani !== 'undefined' && mahalleVeritabani.mahalleler) {
                            const veriler = mahalleVeritabani.mahalleler;
                            let html = '';

                            veriler.forEach(v => {
                                html += `<tr>
                                    <td>${v.id}</td>
                                    <td>${v.adi}</td>
                                    <td>${v.kurum_ref === 1803 ? 'YENİMAHALLE' : v.kurum_ref}</td>
                                    <td><span style="color: ${v.aktif ? 'green' : 'red'}; font-weight: bold;">${v.aktif ? 'AKTİF' : 'PASİF'}</span></td>
                                </tr>`;
                            });

                            tbody.innerHTML = html;
                            if (statusCount) statusCount.innerText = 'Kayıt : ' + veriler.length;
                        } else {
                            tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px; color: red;">Veritabanı hatası! mahalleVeritabani bulunamadı.</td></tr>';
                        }
                    }, 500);
                }
            });
        }

        // Modül içi genel Tab geçişi (Mahalle Sorgu vb. için)
        container.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');
                const paneId = 'pane-' + target;
                const targetPane = container.querySelector('#' + paneId);

                if (targetPane) {
                    container.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    container.querySelectorAll('.module-pane').forEach(p => p.classList.add('hidden'));
                    targetPane.classList.remove('hidden');
                }
            });
        });

        // 6. Başvuru Belgeleri Mantığı (TF0106)
        const basvuruTableBody = container.querySelector('#basvuru-tbody');
        if (basvuruTableBody && typeof basvuruVeritabani !== 'undefined') {

            // Helper: Form Doldurma
            const fillBasvuruForm = (kayit) => {
                const setVal = (id, val) => {
                    const el = container.querySelector('#' + id);
                    if (el) el.value = val !== undefined ? val : '';
                };

                setVal('inp-yil', kayit.yil);
                setVal('inp-sira-no', kayit.sira_no);
                setVal('inp-islem-tanimi', kayit.islem_tanimi);
                setVal('inp-tarih', kayit.basvuru_tarihi);
                setVal('inp-telefon', kayit.basvuran_telefon);
                setVal('inp-tc', kayit.tc_kimlik);
                setVal('inp-ad-soyad', kayit.basvuran_adi);
                setVal('inp-adres', kayit.basvuran_adres);
                setVal('inp-hazirlayan', kayit.hazirlayan);
                setVal('inp-ulke-kod', kayit.ulke_tel_kod);
                setVal('inp-siramatik', '');
                setVal('inp-on-inceleme', kayit.on_inceleme);
                setVal('inp-kontrol', kayit.kontrol_eden);
                setVal('inp-onaylayan', kayit.onaylayan);

                const aciklamaEl = container.querySelector('#inp-aciklama');
                if (aciklamaEl) aciklamaEl.value = kayit.aciklama || '';

                if (kayit.checklist) {
                    const check = (id, state) => {
                        const el = container.querySelector('#' + id);
                        if (el && state !== undefined) el.checked = state;
                    };
                    check('chk-yetki', kayit.checklist.yetki_talebi);
                    check('chk-farkli', kayit.checklist.farkli_mudurluk);
                    check('chk-emlakci', kayit.checklist.emlakci);
                    check('chk-eksik', kayit.checklist.eksik_bilgi);
                    check('chk-yazisma', kayit.checklist.resmi_yazisma);
                }

                const zeminArea = container.querySelector('#zemin-tanim-content');
                if (zeminArea) {
                    if (kayit.zemin_tanim && kayit.zemin_tanim.length > 0) {
                        zeminArea.innerHTML = `<i class="fa-solid fa-square-plus" style="color:blue; margin-right:5px;"></i>` + kayit.zemin_tanim[0] +
                            `<button style="float:right; border:1px solid #999;" class="tf-btn"><i class="fa-solid fa-bolt icon-lightning"></i></button>`;
                    } else {
                        zeminArea.innerHTML = `<button style="float:right; border:1px solid #999;" class="tf-btn"><i class="fa-solid fa-bolt icon-lightning"></i></button>`;
                    }
                }
            };

            // Tabloyu Doldur (DataGrid)
            const veriler = basvuruVeritabani.tumBasvurulariGetir();
            const statusCount = container.querySelector('#status-count');
            if (statusCount) statusCount.innerText = 'Kayıt : ' + veriler.length;

            let html = '';
            veriler.forEach(b => {
                let rowClass = '';
                if (b.durum === 'orange') rowClass = 'row-orange';
                if (b.durum === 'dark-blue') rowClass = 'row-dark-blue';
                const kisaIslem = b.islem_tanimi.length > 25 ? b.islem_tanimi.substring(0, 25) + '...' : b.islem_tanimi;

                html += `<tr class="${rowClass}" data-sira-no="${b.sira_no}" style="cursor:pointer;">
                    <td class="row-indicator"></td>
                    <td>${b.yil}</td>
                    <td>${b.sira_no}</td>
                    <td>${b.basvuru_tarihi.substring(0, 16)}</td>
                    <td>${b.basvuran_adi}</td>
                    <td>${b.basvuran_telefon}</td>
                    <td>${b.basvuran_adres}</td>
                    <td>${b.tasinmaz}</td>
                    <td>${kisaIslem}</td>
                    <td>${b.hazirlayan}</td>
                </tr>`;
            });
            basvuruTableBody.innerHTML = html;

            basvuruTableBody.addEventListener('click', (e) => {
                const tr = e.target.closest('tr');
                if (!tr) return;
                basvuruTableBody.querySelectorAll('tr').forEach(r => r.classList.remove('row-dark-blue'));
                tr.classList.add('row-dark-blue');

                const siraNo = tr.getAttribute('data-sira-no');
                const kayit = basvuruVeritabani.basvuruAra(siraNo);
                if (kayit) fillBasvuruForm(kayit);
            });

            setTimeout(() => {
                const defaultRow = basvuruTableBody.querySelector('tr[data-sira-no="191189"]');
                if (defaultRow) defaultRow.click();
            }, 200);
        }
    }

    // === ANA MENÜ POPUP YÖNETİMİ ===
    document.querySelectorAll('.menu-ikonu-buton').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Eğer bir popup öğesine veya alt menüye tıklandıysa ana menüyü kapatma
            if (e.target.closest('.menu-popup')) return;

            const isAlreadyActive = btn.classList.contains('aktif');
            // Diğer tüm ana menüleri kapat
            document.querySelectorAll('.menu-ikonu-buton').forEach(b => b.classList.remove('aktif'));

            if (!isAlreadyActive) btn.classList.add('aktif');
            e.stopPropagation();
        });
    });

    // Alt Menü (Submenu) Yönetimi
    document.addEventListener('click', (e) => {
        const item = e.target.closest('.menu-popup-item');
        if (item) {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                // Eğer tıklanan madde bir alt menü içeriyorsa onu aç/kapat
                item.classList.toggle('submenu-open');
                e.stopPropagation();
                return;
            }
        }

        // Boş bir yere tıklandığında veya modül tıklandığında menüleri kapat
        if (!e.target.closest('.menu-ikonu-buton')) {
            document.querySelectorAll('.menu-ikonu-buton').forEach(b => b.classList.remove('aktif'));
            document.querySelectorAll('.menu-popup-item').forEach(i => i.classList.remove('submenu-open'));
        }
    });

    // === SİSTEM GEÇİŞLERİ (LOGIN / LOGOUT / DESKTOP) ===

    // Windows Masaüstü -> Login
    const startBtn = document.getElementById('start-takbis-btn');
    if (startBtn) {
        const startToLogin = () => {
            if (windowsDesktop) windowsDesktop.classList.add('hidden');
            if (loginView) {
                loginView.classList.remove('hidden');
                loginView.style.display = 'block';
            }
        };
        startBtn.addEventListener('click', startToLogin);
        startBtn.addEventListener('dblclick', startToLogin);
    }

    // Login Form -> Uygulama
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (loginView) loginView.classList.add('hidden');
            setTimeout(() => {
                if (loginView) loginView.style.display = 'none';
                if (anaMasaustu) {
                    anaMasaustu.style.display = 'block';
                    anaMasaustu.classList.remove('hidden');
                }
            }, 300);
        });
    }

    // Login Kapat (X) -> Masaüstü
    const loginCloseX = document.querySelector('.login-close-x');
    if (loginCloseX) {
        loginCloseX.addEventListener('click', () => {
            if (loginView) loginView.classList.add('hidden');
            if (windowsDesktop) windowsDesktop.classList.remove('hidden');
        });
    }

    // Uygulama Çıkış -> Masaüstü
    document.querySelectorAll('.btn-logout-app').forEach(btn => {
        btn.addEventListener('click', () => {
            if (anaMasaustu) anaMasaustu.classList.add('hidden');
            if (windowsDesktop) {
                windowsDesktop.classList.remove('hidden');
                windowsDesktop.style.display = 'flex';
            }
        });
    });

});
