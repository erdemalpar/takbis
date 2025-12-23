document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const loginView = document.getElementById('login-view');
    const dashboardView = document.getElementById('dashboard-view');
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    // Workspace Panels
    const welcomeScreen = document.getElementById('welcome-screen');
    const panelKisiSorgu = document.getElementById('panel-kisi-sorgu');
    const closePanelBtn = document.querySelector('.close-panel-btn');

    // Modal Elements
    const modalTanitim = document.getElementById('modal-tanitim-tip');
    const btnOpenModal = document.getElementById('btn-open-type-modal');
    const btnCloseModal = document.querySelectorAll('.close-modal-btn');
    const inpTanitimTip = document.getElementById('inp-tanitim-no-tip');
    const tableRows = document.querySelectorAll('.std-table tbody tr');

    // Database Schema Elements
    const tkLogoBtn = document.getElementById('tk-logo-btn');
    const panelDbSchema = document.getElementById('panel-db-schema');

    // === tK LOGO - VERİTABANI ŞEMASI AÇMA ===
    if (tkLogoBtn) {
        tkLogoBtn.addEventListener('click', () => {
            // Tüm panelleri kapat
            welcomeScreen.classList.remove('active');
            welcomeScreen.classList.add('hidden');
            document.querySelectorAll('.workspace-panel').forEach(p => {
                p.classList.remove('active');
                p.classList.add('hidden');
            });

            // Veritabanı şeması panelini aç
            panelDbSchema.classList.remove('hidden');
            panelDbSchema.classList.add('active');

            // Şemayı yükle
            veritabaniSemaYukle();
        });
    }

    // === VERİTABANI ŞEMASINI YÜKLEME ===
    function veritabaniSemaYukle() {
        const sema = veritabaniSemasiGetir();
        const dbNameEl = document.getElementById('db-name');
        const dbDescEl = document.getElementById('db-description');
        const tablesListEl = document.getElementById('db-tables-list');

        // Başlık ve açıklama
        dbNameEl.textContent = sema.veritabani_adi;
        dbDescEl.textContent = sema.aciklama;

        // Tablo listesini doldur
        tablesListEl.innerHTML = '';
        sema.tablolar.forEach((tablo, index) => {
            const tableItem = document.createElement('div');
            tableItem.className = 'db-table-item';
            if (index === 0) tableItem.classList.add('active');

            tableItem.innerHTML = `
                <i class="fa-solid fa-table"></i>
                <span class="db-table-name">${tablo.tablo_adi}</span>
                <span class="db-table-count">${tablo.kayit_sayisi}</span>
            `;

            tableItem.addEventListener('click', () => {
                // Tüm tablolardan active kaldır
                document.querySelectorAll('.db-table-item').forEach(item => {
                    item.classList.remove('active');
                });
                tableItem.classList.add('active');

                // Tablo detaylarını göster
                tabloDetaylariGoster(tablo);
            });

            tablesListEl.appendChild(tableItem);
        });

        // İlk tabloyu otomatik göster
        if (sema.tablolar.length > 0) {
            tabloDetaylariGoster(sema.tablolar[0]);
        }
    }

    // === TABLO DETAYLARINI GÖSTERME ===
    function tabloDetaylariGoster(tablo) {
        const detailsEl = document.getElementById('db-table-details');
        const statusEl = document.getElementById('db-status');

        detailsEl.innerHTML = `
            <div class="table-detail-header">
                <div class="table-detail-title">
                    <i class="fa-solid fa-table"></i>
                    <h2>${tablo.tablo_adi}</h2>
                    <button class="btn-view-data" id="btn-view-table-data" style="margin-left: auto;">
                        <i class="fa-solid fa-eye"></i> Verileri Görüntüle
                    </button>
                </div>
                <div class="table-detail-desc">${tablo.aciklama}</div>
                <div class="table-detail-stats">
                    <div class="stat-item">
                        <i class="fa-solid fa-columns"></i>
                        <span>Kolon Sayısı: <span class="stat-value">${tablo.kolonlar.length}</span></span>
                    </div>
                    <div class="stat-item">
                        <i class="fa-solid fa-database"></i>
                        <span>Kayıt Sayısı: <span class="stat-value">${tablo.kayit_sayisi}</span></span>
                    </div>
                </div>
            </div>
            <div class="columns-table-container">
                <table class="columns-table">
                    <thead>
                        <tr>
                            <th style="width: 30px;"></th>
                            <th>Kolon Adı</th>
                            <th>Veri Tipi</th>
                            <th style="width: 80px; text-align: center;">Null?</th>
                            <th style="width: 100px;">Anahtar</th>
                            <th>Açıklama</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tablo.kolonlar.map(kolon => `
                            <tr class="${kolon.anahtar === 'PRIMARY KEY' ? 'primary-key' : ''}">
                                <td>
                                    <span class="column-icon">
                                        ${kolon.anahtar === 'PRIMARY KEY' ? '<i class="fa-solid fa-key"></i>' : '<i class="fa-solid fa-circle" style="font-size: 8px;"></i>'}
                                    </span>
                                </td>
                                <td class="column-name">${kolon.kolon_adi}</td>
                                <td class="column-type">${kolon.veri_tipi}</td>
                                <td class="column-null">
                                    <span class="${kolon.null_olabilir ? 'null-yes' : 'null-no'}">
                                        ${kolon.null_olabilir ? '✓' : '✗'}
                                    </span>
                                </td>
                                <td class="column-key">${kolon.anahtar || '-'}</td>
                                <td class="column-description">${kolon.aciklama}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        statusEl.textContent = `Tablo: ${tablo.tablo_adi} | ${tablo.kolonlar.length} kolon | ${tablo.kayit_sayisi} kayıt`;

        // "Verileri Görüntüle" butonuna event ekle
        const btnViewData = document.getElementById('btn-view-table-data');
        if (btnViewData) {
            btnViewData.addEventListener('click', () => {
                tabloVerileriniGoster(tablo);
            });
        }
    }

    // === TABLO VERİLERİNİ MODAL İLE GÖSTER ===
    function tabloVerileriniGoster(tablo) {
        const veriler = tabloVerileriniGetir(tablo.tablo_adi);

        if (veriler.length === 0) {
            alert('Bu tabloda henüz veri bulunmamaktadır.');
            return;
        }

        // Modal oluştur
        let modal = document.getElementById('modal-table-data');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'modal-table-data';
            modal.className = 'modal-overlay';
            document.body.appendChild(modal);
        }

        // Modal içeriğini oluştur
        const kolonlar = tablo.kolonlar.map(k => k.kolon_adi);

        modal.innerHTML = `
            <div class="modal-window" style="width: 90vw; max-width: 1200px;">
                <div class="modal-header">
                    <span>📊 ${tablo.tablo_adi} Tablosu - Kayıtlar</span>
                    <div class="modal-controls">
                        <i class="fa-solid fa-xmark close-table-data-modal" style="cursor: pointer;"></i>
                    </div>
                </div>
                <div class="modal-content-table" style="max-height: 500px;">
                    <table class="std-table">
                        <thead>
                            <tr>
                                ${kolonlar.map(k => `<th>${k}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${veriler.map(veri => `
                                <tr>
                                    ${kolonlar.map(k => `<td>${veri[k] || ''}</td>`).join('')}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <div class="footer-left">${new Date().toLocaleDateString('tr-TR')}</div>
                    <div class="footer-center">${tablo.tablo_adi} Tablosu</div>
                    <div class="footer-right">Kayıt: ${veriler.length}</div>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');

        // Kapatma eventi
        const closeBtn = modal.querySelector('.close-table-data-modal');
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // Modal dışına tıklandığında kapat
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }



    // === LOGIN LOGIC ===
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.querySelector('input[type="password"]').value;
        if (password) {
            loginView.classList.remove('active');
            loginView.classList.add('hidden');
            setTimeout(() => {
                loginView.style.display = 'none';
                dashboardView.style.display = 'flex';
                dashboardView.classList.remove('hidden');
                setTimeout(() => { dashboardView.classList.add('active'); }, 50);
            }, 300);
        }
    });

    // === LOGOUT LOGIC ===
    logoutBtn.addEventListener('click', () => {
        dashboardView.classList.remove('active');
        dashboardView.classList.add('hidden');
        setTimeout(() => {
            dashboardView.style.display = 'none';
            loginView.style.display = 'block';
            loginView.classList.remove('hidden');
            setTimeout(() => { loginView.classList.add('active'); }, 50);
        }, 300);
    });

    // === MENU & DROPDOWN LOGIC ===
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.classList.contains('btn-logout')) return;
            const isActive = item.classList.contains('active');
            menuItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
            e.stopPropagation();
        });
    });

    document.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
    });

    // === PANEL NAVIGATION (UPDATED) ===
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(dItem => {
        dItem.addEventListener('click', (e) => {
            const text = dItem.innerText;

            // Hide all first
            welcomeScreen.classList.remove('active');
            welcomeScreen.classList.add('hidden');
            document.querySelectorAll('.workspace-panel').forEach(p => {
                p.classList.remove('active');
                p.classList.add('hidden');
            });

            // Route based on text
            if (text.includes('Kişi Bilgileri')) {
                panelKisiSorgu.classList.remove('hidden');
                panelKisiSorgu.classList.add('active');
            } else if (text.includes('Başvuru Belgeleri')) {
                const p = document.getElementById('panel-basvuru-belgeleri');
                p.classList.remove('hidden');
                p.classList.add('active');
            } else if (text.includes('İş Yükü Monitörü')) {
                const p = document.getElementById('panel-is-yuku');
                p.classList.remove('hidden');
                p.classList.add('active');
            } else if (text.includes('Personel Puantaj')) {
                document.getElementById('panel-personel-puantaj').classList.remove('hidden');
                document.getElementById('panel-personel-puantaj').classList.add('active');
            } else if (text.includes('Haciz Uyarıları')) {
                document.getElementById('panel-haciz-uyarilari').classList.remove('hidden');
                document.getElementById('panel-haciz-uyarilari').classList.add('active');
            } else if (text.includes('Personel - İşlem')) {
                document.getElementById('panel-personel-islem').classList.remove('hidden');
                document.getElementById('panel-personel-islem').classList.add('active');
            } else if (text.includes('Ülke Tanımları')) {
                const panelUlke = document.getElementById('panel-ulke-tanimlari');
                panelUlke.classList.remove('hidden');
                panelUlke.classList.add('active');
                ulkeListesiniDoldur();
            } else if (text.includes('Mahalle Sorgu')) {
                const p = document.getElementById('panel-mahalle-sorgu');
                p.classList.remove('hidden');
                p.classList.add('active');
            } else if (text.includes('Yevmiye Defteri')) {
                document.getElementById('panel-yevmiye-defteri').classList.remove('hidden');
                document.getElementById('panel-yevmiye-defteri').classList.add('active');
            } else if (text.includes('Temsil Azil Defteri')) {
                document.getElementById('panel-temsil-azil').classList.remove('hidden');
                document.getElementById('panel-temsil-azil').classList.add('active');
            } else if (text.includes('Tüzel Kişi')) {
                const panel = document.getElementById('panel-tuzel-kisi-sorgu');
                if (panel) {
                    panel.classList.remove('hidden');
                    panel.classList.add('active');
                }
            } else if (text.includes('Yabancı Kimlik')) {
                const panel = document.getElementById('panel-yabanci-kisi-sorgu');
                if (panel) {
                    panel.classList.remove('hidden');
                    panel.classList.add('active');
                }
            } else {
                // Default back to welcome if not implemented
                welcomeScreen.classList.remove('hidden');
                welcomeScreen.classList.add('active');
            }

            // Close menu
            menuItems.forEach(i => i.classList.remove('active'));
            e.stopPropagation();
        });
    });

    // Close Panel Butttons (Dynamic)
    const closePanelBtns = document.querySelectorAll('.close-panel-btn');
    closePanelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Find parent panel
            const panel = btn.closest('.workspace-panel');
            if (panel) {
                panel.classList.remove('active');
                panel.classList.add('hidden');
            }
            welcomeScreen.classList.remove('hidden');
            welcomeScreen.classList.add('active');
        });
    });

    // === WORKLOAD MONITOR TREE LOGIC ===
    const treeToggles = document.querySelectorAll('.tree-toggle');
    treeToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const parentItem = btn.closest('div[class^="wl-item"]');
            const expandedTable = parentItem.querySelector('.wl-expanded-table');
            if (expandedTable) {
                if (expandedTable.style.display === 'none') {
                    expandedTable.style.display = 'block';
                    btn.innerText = '-';
                } else {
                    expandedTable.style.display = 'none';
                    btn.innerText = '+';
                }
            }
        });
    });

    // === ACCORDION LOGIC ===
    const accHeaders = document.querySelectorAll('.accordion-header');
    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            // Toggle open class
            item.classList.toggle('open');

            // Toggle body visibility
            const body = item.querySelector('.accordion-body');
            if (item.classList.contains('open')) {
                body.classList.remove('hidden');
            } else {
                body.classList.add('hidden');
            }
        });
    });

    // === MODAL LOGIC (Generic Handler could be better but sticking to simple) ===

    // 1. Tanıtım No Tip Modal
    if (btnOpenModal) {
        btnOpenModal.addEventListener('click', (e) => {
            modalTanitim.classList.remove('hidden');
            e.stopPropagation();
        });
    }

    btnCloseModal.forEach(btn => {
        btn.addEventListener('click', () => {
            modalTanitim.classList.add('hidden');
        });
    });

    // Select row in Tanıtım table
    const tableTanitimRows = document.querySelectorAll('#modal-tanitim-tip tbody tr');
    tableTanitimRows.forEach(row => {
        row.addEventListener('click', () => {
            tableTanitimRows.forEach(r => r.classList.remove('selected'));
            row.classList.add('selected');
            const val = row.getAttribute('data-val');
            inpTanitimTip.value = val;
        });
        row.addEventListener('dblclick', () => {
            modalTanitim.classList.add('hidden');
        });
    });

    // 2. Kimlik Tip Modal
    const modalKimlik = document.getElementById('modal-kimlik-tip');
    const btnOpenKimlik = document.getElementById('btn-open-kimlik-modal');
    const btnCloseKimlik = document.querySelectorAll('.close-modal-btn-kimlik');
    const inpKimlikTip = document.getElementById('inp-kimlik-tip');

    if (btnOpenKimlik) {
        btnOpenKimlik.addEventListener('click', (e) => {
            modalKimlik.classList.remove('hidden');
            e.stopPropagation();
        });
    }

    btnCloseKimlik.forEach(btn => {
        btn.addEventListener('click', () => {
            modalKimlik.classList.add('hidden');
        });
    });

    // Select row in Kimlik table
    const tableKimlikRows = document.querySelectorAll('#table-kimlik-tip tbody tr');
    tableKimlikRows.forEach(row => {
        row.addEventListener('click', () => {
            tableKimlikRows.forEach(r => r.classList.remove('selected'));
            row.classList.add('selected');
            const val = row.getAttribute('data-val');
            inpKimlikTip.value = val;
        });
        row.addEventListener('dblclick', () => {
            modalKimlik.classList.add('hidden');
        });
    });

    // Close modal if clicking outside window
    /*
    modalTanitim.addEventListener('click', (e) => {
        if (e.target === modalTanitim) {
            modalTanitim.classList.add('hidden');
        }
    });
    */

    // === KİŞİ SORGULAMA PANELİ - SEKME GEÇİŞLERİ ===
    const kisiPaneliTabs = document.querySelectorAll('#panel-kisi-sorgu .tab');
    kisiPaneliTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            // Tüm sekmeleri pasif yap
            kisiPaneliTabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('#panel-kisi-sorgu .tab-content').forEach(tc => {
                tc.classList.remove('active');
                tc.classList.add('hidden');
            });

            // Seçili sekmeyi aktif yap
            tab.classList.add('active');
            const contentToShow = document.getElementById('tab-' + targetTab);
            if (contentToShow) {
                contentToShow.classList.remove('hidden');
                contentToShow.classList.add('active');
            }
        });
    });

    // === ŞİMŞEK BUTONU (YÜRÜT) - ARAMA YAPMA ===
    const yurutButonu = document.querySelector('#panel-kisi-sorgu .t-btn .fa-play');
    if (yurutButonu) {
        yurutButonu.closest('.t-btn').addEventListener('click', () => {
            // Kişi Sistem No'yu al
            const kisiSistemNo = document.getElementById('inp-kisi-sistem-no').value.trim();

            let sonuclar = [];

            if (kisiSistemNo) {
                // Hızlı arama - Kişi sistem no ile sorgula
                sonuclar = kisiSistemNoIleSorgula(kisiSistemNo);
            } else {
                // Detaylı arama kriterleri ile sorgula
                const kriterler = {};
                const soyadi = document.getElementById('detay-soyadi').value.trim();
                const adi = document.getElementById('detay-adi').value.trim();
                const babaAdi = document.getElementById('detay-baba-adi').value.trim();
                const anaAdi = document.getElementById('detay-ana-adi').value.trim();
                const dogumYeri = document.getElementById('detay-dogum-yeri').value.trim();

                if (soyadi) kriterler.soyadi = soyadi;
                if (adi) kriterler.adi = adi;
                if (babaAdi) kriterler.baba_adi = babaAdi;
                if (anaAdi) kriterler.ana_adi = anaAdi;
                if (dogumYeri) kriterler.dogum_yeri = dogumYeri;

                if (Object.keys(kriterler).length > 0) {
                    sonuclar = detayliArama(kriterler);
                }
            }

            // Eğer sonuç varsa
            if (sonuclar.length > 0) {
                // İlk sonucun detaylarını forma doldur
                const ilkKisi = sonuclar[0];
                kisiDetaylariniDoldur(ilkKisi);

                // Kişi Listesi sekmesine geç ve sonuçları göster
                kisiPaneliTabs.forEach(t => t.classList.remove('active'));
                document.querySelectorAll('#panel-kisi-sorgu .tab-content').forEach(tc => {
                    tc.classList.remove('active');
                    tc.classList.add('hidden');
                });

                const kisiListesiTab = document.querySelector('#panel-kisi-sorgu .tab[data-tab="kisi-listesi"]');
                const kisiListesiContent = document.getElementById('tab-kisi-listesi');

                if (kisiListesiTab && kisiListesiContent) {
                    kisiListesiTab.classList.add('active');
                    kisiListesiContent.classList.remove('hidden');
                    kisiListesiContent.classList.add('active');

                    // Sonuçları tabloya doldur
                    kisiListesiDoldur(sonuclar);
                }
            } else {
                alert('Arama kriterlerine uygun kişi bulunamadı.');
            }
        });
    }

    // === KİŞİ DETAYLARINI FORMA DOLDURMA ===
    function kisiDetaylariniDoldur(kisi) {
        // Detaylı arama formunu doldur
        document.getElementById('detay-soyadi').value = kisi.soyadi || '';
        document.getElementById('detay-adi').value = kisi.adi || '';
        document.getElementById('detay-baba-adi').value = kisi.baba_adi || '';
        document.getElementById('detay-ana-adi').value = kisi.ana_adi || '';
        document.getElementById('detay-dogum-yeri').value = kisi.dogum_yeri || '';
        document.getElementById('detay-dogum-baslangic').value = kisi.dogum_tarihi_baslangic || '';
        document.getElementById('detay-dogum-bitis').value = kisi.dogum_tarihi_bitis || '';
        document.getElementById('detay-il').value = kisi.il || '';
        document.getElementById('detay-ilce').value = kisi.ilce || '';
        document.getElementById('detay-mahalle').value = kisi.mahalle_koy || '';
        document.getElementById('detay-cilt-no').value = kisi.cilt_no || '';
        document.getElementById('detay-aile-sira').value = kisi.aile_sira_no || '';
        document.getElementById('detay-sira-no').value = kisi.sira_no || '';
        document.getElementById('detay-uyruk').value = kisi.uyruk || '';
        document.getElementById('detay-cinsiyet').value = kisi.cinsiyet || '';
        document.getElementById('detay-vatandaslik').value = kisi.vatandaslik_tip || '';
        document.getElementById('detay-engel-tip').value = kisi.engel_tip || '';
    }

    // === KİŞİ LİSTESİ TABLOSUNU DOLDURMA (Güncellenmiş) ===
    function kisiListesiDoldur(kisiler) {
        const tbody = document.getElementById('kisi-liste-tbody');
        const kayitSayisi = document.getElementById('kisi-kayit-sayisi');

        // Tabloyu temizle
        tbody.innerHTML = '';

        // Verileri ekle
        kisiler.forEach((kisi, index) => {
            const tr = document.createElement('tr');
            if (index === 0) {
                tr.classList.add('selected-row');
            }

            tr.innerHTML = `
                <td>${kisi.kisi_sistem_no}</td>
                <td>${kisi.tc_kimlik_no}</td>
                <td>${kisi.vergi_no}</td>
                <td>${kisi.adi}</td>
                <td>${kisi.soyadi}</td>
                <td>${kisi.bir_onceki_soyadi}</td>
                <td>${kisi.baba_adi}</td>
                <td>${kisi.ana_adi}</td>
                <td>${kisi.dogum_yeri}</td>
                <td>${kisi.dogum_tarihi}</td>
                <td>${kisi.cinsiyet}</td>
            `;

            // Satır tıklama
            tr.addEventListener('click', () => {
                // Tüm satırlardan seçimi kaldır
                tbody.querySelectorAll('tr').forEach(row => row.classList.remove('selected-row'));
                // Bu satırı seç
                tr.classList.add('selected-row');
                // Detayları forma doldur
                kisiDetaylariniDoldur(kisi);
            });

            tbody.appendChild(tr);
        });

        // Kayıt sayısını güncelle
        kayitSayisi.textContent = kisiler.length;
    }

    // === ÖRNEK KİŞİ VERİLERİ DOLDURMA (ESKİ FONKSİYON - ARTIK KULLANILMIYOR) ===
    function ornekKisiListesiDoldur() {
        const tbody = document.getElementById('kisi-liste-tbody');
        const kayitSayisi = document.getElementById('kisi-kayit-sayisi');

        // Örnek veriler
        const ornekVeriler = [
            {
                sistemNo: '74440384',
                tcKimlik: '23666443662',
                vergiNo: '',
                adi: 'ŞEVKET SERDAL',
                soyadi: 'ALPAR',
                oncekiSoyad: '',
                babaAdi: 'ALİİHSAN',
                anaAdi: 'HANİFE İNCİ',
                dogumYeri: 'ULA',
                dogumTarihi: '14/01/1981',
                cinsiyet: 'Erkek'
            },
            {
                sistemNo: '16001379',
                tcKimlik: '23666443662',
                vergiNo: '',
                adi: 'ŞEVKET SERDAL',
                soyadi: 'ALPAR',
                oncekiSoyad: '',
                babaAdi: 'ALİİHSAN',
                anaAdi: 'HANİFE İNCİ',
                dogumYeri: 'ULA',
                dogumTarihi: '14/01/1981',
                cinsiyet: 'Erkek'
            }
        ];

        // Tabloyu temizle
        tbody.innerHTML = '';

        // Verileri ekle
        ornekVeriler.forEach((veri, index) => {
            const tr = document.createElement('tr');
            if (index === 0) {
                tr.classList.add('selected-row');
            }

            tr.innerHTML = `
                <td>${veri.sistemNo}</td>
                <td>${veri.tcKimlik}</td>
                <td>${veri.vergiNo}</td>
                <td>${veri.adi}</td>
                <td>${veri.soyadi}</td>
                <td>${veri.oncekiSoyad}</td>
                <td>${veri.babaAdi}</td>
                <td>${veri.anaAdi}</td>
                <td>${veri.dogumYeri}</td>
                <td>${veri.dogumTarihi}</td>
                <td>${veri.cinsiyet}</td>
            `;

            // Satır tıklama
            tr.addEventListener('click', () => {
                // Tüm satırlardan seçimi kaldır
                tbody.querySelectorAll('tr').forEach(row => row.classList.remove('selected-row'));
                // Bu satırı seç
                tr.classList.add('selected-row');
            });

            tbody.appendChild(tr);
        });

        // Kayıt sayısını güncelle
        kayitSayisi.textContent = ornekVeriler.length;
    }

    // === ÜLKE LİSTESİNİ DOLDURMA ===
    let secilenUlke = null;

    function ulkeListesiniDoldur() {
        const ulkeler = tumUlkeleriGetir();
        const tbody = document.getElementById('ulke-tbody');
        const kayitSayisi = document.getElementById('ulke-kayit-sayisi');

        tbody.innerHTML = '';

        ulkeler.forEach((ulke, index) => {
            const tr = document.createElement('tr');
            if (index === 0) {
                tr.classList.add('selected-row');
                secilenUlke = ulke;
                ulkeDetaylariGoster(ulke);
            }

            tr.innerHTML = `
                <td>${ulke.adi}</td>
                <td>${ulke.resmi_adi}</td>
            `;

            tr.addEventListener('click', () => {
                tbody.querySelectorAll('tr').forEach(row => row.classList.remove('selected-row'));
                tr.classList.add('selected-row');
                secilenUlke = ulke;
                ulkeDetaylariGoster(ulke);
            });

            tbody.appendChild(tr);
        });

        kayitSayisi.textContent = ulkeler.length;
    }

    function ulkeDetaylariGoster(ulke) {
        document.getElementById('ulke-adi').value = ulke.adi;
        document.getElementById('ulke-resmi-adi').value = ulke.resmi_adi;

        // Bayrak placeholder - Bayrak emojisi ile gösterelim
        const bayrakDiv = document.getElementById('ulke-bayrak');
        bayrakDiv.innerHTML = '🏳️';
    }

    // === MÜTEKABİLİYET MODAL ===
    const btnMutekabiliyet = document.getElementById('btn-mutekabiliyet');
    if (btnMutekabiliyet) {
        btnMutekabiliyet.addEventListener('click', () => {
            if (!secilenUlke) {
                alert('Lütfen önce bir ülke seçin.');
                return;
            }
            mutekabiliyetModalAc(secilenUlke);
        });
    }

    function mutekabiliyetModalAc(ulke) {
        let modal = document.getElementById('modal-mutekabiliyet');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'modal-mutekabiliyet';
            modal.className = 'modal-overlay';
            document.body.appendChild(modal);
        }

        const bugun = new Date().toLocaleDateString('tr-TR');

        modal.innerHTML = `
            <div class="modal-window" style="width: 700px;">
                <div class="window-header">
                    <span>TF0419 - Ülkemizde Taşınmaz Ve Sınırlı Ayni Hak Edinim Bilgisi</span>
                    <div class="window-controls">
                        <i class="fa-regular fa-window-minimize"></i>
                        <i class="fa-regular fa-window-maximize"></i>
                        <i class="fa-solid fa-xmark close-mutekabiliyet-modal" style="cursor: pointer;"></i>
                    </div>
                </div>
                <div class="modal-content" style="padding: 20px;">
                    <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                        <div style="flex: 1;">
                            <div style="background: #e8e8e8; padding: 10px; border: 1px solid #999; margin-bottom: 10px;">
                                <label style="display: block; font-size: 11px; margin-bottom: 5px;">Ülke</label>
                                <div style="display: flex; align-items: center;">
                                    <i class="fa-solid fa-user" style="margin-right: 8px;"></i>
                                    <span style="font-weight: bold;">${ulke.adi}</span>
                                </div>
                            </div>
                            <div style="background: #e8e8e8; padding: 10px; border: 1px solid #999;">
                                <label style="display: block; font-size: 11px; margin-bottom: 5px;">Edinim Tipi</label>
                                <input type="text" class="std-input" value="${ulke.edinim_tipi}" readonly style="width: 100%;">
                            </div>
                        </div>
                        <div style="flex: 1;">
                            <div style="background: #e8e8e8; padding: 10px; border: 1px solid #999; margin-bottom: 10px;">
                                <label style="display: block; font-size: 11px; margin-bottom: 5px;">Geçerlilik Süresi Başlama Tarihi</label>
                                <input type="text" class="std-input" value="${ulke.gecerlilik_baslama}" readonly style="width: 100%;">
                            </div>
                            <div style="background: #e8e8e8; padding: 10px; border: 1px solid #999;">
                                <label style="display: block; font-size: 11px; margin-bottom: 5px;">Geçerlilik Süresi Bitiş Tarihi</label>
                                <input type="text" class="std-input" value="${ulke.gecerlilik_bitis}" readonly style="width: 100%;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');

        // Kapatma eventi
        const closeBtn = modal.querySelector('.close-mutekabiliyet-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }
    }
});
