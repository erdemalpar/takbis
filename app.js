document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const loginView = document.getElementById('login-view');
    const anaMasaustu = document.getElementById('ana-masaustu');
    const loginForm = document.getElementById('login-form');

    // === PENCERE YÖNETİMİ ===
    const pencereler = {
        kisiSorgu: document.getElementById('pencere-kisi-sorgu')
    };

    const pencereAc = (pencereId) => {
        const p = document.getElementById(pencereId);
        if (p) {
            p.classList.remove('hidden');
            p.style.zIndex = getNextZIndex();
            // Ortala
            const masaustu = document.getElementById('pencere-alani');
            p.style.top = (masaustu.offsetHeight / 2 - p.offsetHeight / 2) + 'px';
            p.style.left = (masaustu.offsetWidth / 2 - p.offsetWidth / 2) + 'px';
        }
    };

    let maxZIndex = 100;
    const getNextZIndex = () => ++maxZIndex;

    // Sürükle-Bırak Mantığı (Klasik EXE Hissi)
    const surukleYap = (pencere) => {
        const baslik = pencere.querySelector('.pencere-baslik');
        let isDragging = false;
        let offset = { x: 0, y: 0 };

        baslik.addEventListener('mousedown', (e) => {
            isDragging = true;
            pencere.style.zIndex = getNextZIndex();
            offset.x = e.clientX - pencere.offsetLeft;
            offset.y = e.clientY - pencere.offsetTop;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });

        const onMouseMove = (e) => {
            if (!isDragging) return;
            pencere.style.left = (e.clientX - offset.x) + 'px';
            pencere.style.top = (e.clientY - offset.y) + 'px';
        };

        const onMouseUp = () => {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    };

    // Tüm pencereleri sürüklenebilir yap
    document.querySelectorAll('.pencere, .ana-menu-penceresi').forEach(p => surukleYap(p));

    // Pencere Kapatma Butonları
    document.querySelectorAll('.pencere-kapat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const p = btn.closest('.pencere');
            if (p) p.classList.add('hidden');
        });
    });

    // === ANA MENÜ AKSİYONLARI VE ALT MENÜLER (POPUP) ===

    // Alt Menü Butonlarına Tıklama (Aç/Kapat)
    document.querySelectorAll('.menu-ikonu-buton').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Eğer tıklanan yer bir popup-item ise pencere açılışını bekle, popup'ın kendisini toggle etme
            if (e.target.closest('.menu-popup')) return;

            const isAktif = btn.classList.contains('aktif');
            // Önce tüm diğerlerini kapat
            document.querySelectorAll('.menu-ikonu-buton').forEach(b => b.classList.remove('aktif'));

            if (!isAktif) {
                btn.classList.add('aktif');
            }
            e.stopPropagation();
        });
    });

    // Alt Menü Öğelerine Tıklama (Pencere Açma ve Alt Menü Yönetimi)
    document.querySelectorAll('.menu-popup-item').forEach(item => {
        item.addEventListener('click', (e) => {
            // Eğer bu öğenin bir alt menüsü (submenu) varsa:
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                // Sadece görsel olarak tıklandığını hissettir, ama ana modülü kapatma
                item.classList.toggle('submenu-open');
                e.stopPropagation();
                return;
            }

            // Normal bir madde ise pencereyi aç
            const pencereId = item.getAttribute('data-open-window');
            if (pencereId) {
                pencereAc(pencereId);
            }

            // Tüm menü hiyerarşisini kapat
            document.querySelectorAll('.menu-ikonu-buton').forEach(b => b.classList.remove('aktif'));
            e.stopPropagation();
        });
    });

    // Boşluğa tıklandığında açık menüleri kapat
    document.addEventListener('click', () => {
        document.querySelectorAll('.menu-ikonu-buton').forEach(btn => btn.classList.remove('aktif'));
    });

    // === LOGIN LOGIC ===
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginView.classList.add('hidden');
        setTimeout(() => {
            loginView.style.display = 'none';
            anaMasaustu.style.display = 'block';
            anaMasaustu.classList.remove('hidden');
            anaMasaustu.classList.add('aktif');
        }, 300);
    });

    // === ÇIKIŞ YAP ===
    document.querySelectorAll('.btn-logout-app').forEach(btn => {
        btn.addEventListener('click', () => {
            anaMasaustu.classList.remove('aktif');
            anaMasaustu.classList.add('hidden');
            setTimeout(() => {
                anaMasaustu.style.display = 'none';
                loginView.style.display = 'block';
                loginView.classList.remove('hidden');
                loginView.classList.add('active');
            }, 300);
        });
    });

    // === KİŞİ SORGULAMA LOGIC (Basitleştirilmiş) ===
    const btnYurut = document.querySelector('.btn-yurut');
    if (btnYurut) {
        btnYurut.addEventListener('click', () => {
            const sistemNo = document.getElementById('inp-kisi-sistem-no').value;
            const sonuclar = (typeof kisiSistemNoIleSorgula === 'function') ? kisiSistemNoIleSorgula(sistemNo) : [];

            const tbody = document.getElementById('kisi-liste-tbody');
            tbody.innerHTML = '';

            if (sonuclar.length > 0) {
                // Listeye geç
                document.querySelector('[data-tab="kisi-listesi"]').click();
                sonuclar.forEach(k => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `<td>${k.kisi_sistem_no}</td><td>${k.adi}</td><td>${k.soyadi}</td>`;
                    tbody.appendChild(tr);
                });
            } else {
                alert('Kayıt bulunamadı.');
            }
        });
    }

    // Sekme Geçişleri
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const parent = tab.closest('.pencere');
            const target = tab.getAttribute('data-tab');

            parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            parent.querySelectorAll('.tab-content').forEach(c => {
                c.classList.remove('active');
                c.classList.add('hidden');
            });
            parent.querySelector('#tab-' + target).classList.add('active');
            parent.querySelector('#tab-' + target).classList.remove('hidden');
        });
    });
});
