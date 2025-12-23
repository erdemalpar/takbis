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

        // 2. Sekmeler (Tabs)
        container.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');
                container.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // İçerik filtreleme
                const accordion = container.querySelector('.tf-accordion');
                const listTable = container.querySelector('.complex-table');

                if (target === 'kisi-listesi') {
                    if (accordion) accordion.classList.add('hidden');
                    // Liste tablosu yoksa 'Sorgulama Yok' mesajı ekle
                    if (!listTable) {
                        const tableHtml = '<table class="complex-table"><thead><tr><th>Sistem No</th><th>Adı</th><th>Soyadı</th></tr></thead><tbody><tr><td colspan="3" style="text-align:center;">Veri bulunamadı.</td></tr></tbody></table>';
                        container.querySelector('.panel-content-classic').insertAdjacentHTML('beforeend', tableHtml);
                    } else listTable.classList.remove('hidden');
                } else {
                    if (accordion) accordion.classList.remove('hidden');
                    if (listTable) listTable.classList.add('hidden');
                }
            });
        });

        // 4. Mütekabiliyet Yardım Butonu
        const helpBtn = container.querySelector('#btn-help-mutekabiliyet');
        if (helpBtn) {
            helpBtn.addEventListener('click', () => {
                alert("MÜTEKABİLİYET (KARŞILIKLILIK) NEDİR?\n\nMütekabiliyet, devletlerarası ilişkilerde maruz kalınan davranışa aynı şekilde karşılık verme prensibidir.\n\nTapu ve Kadastro mevzuatında ise; bir yabancı ülke vatandaşının Türkiye'de taşınmaz edinebilmesi için, kendi ülkesinin de Türk vatandaşlarına aynı hakları tanıması şartını ifade eder.");
            });
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
