const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Ana pencere referansını sakla
let anaPencere;

function anaPencereOlustur() {
    // Tarayıcı penceresi oluştur
    anaPencere = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 1024,
        minHeight: 768,
        title: 'TAKBİS - Sistem Girişi',
        icon: path.join(__dirname, 'icon.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            // Güvenlik için web güvenliği aktif
            webSecurity: true
        },
        // Modern görünüm
        frame: true,
        backgroundColor: '#2c3e50',
        show: false, // Hazır olduğunda göster
        autoHideMenuBar: false
    });

    // index.html dosyasını yükle
    anaPencere.loadFile('index.html');

    // Pencere hazır olduğunda göster
    anaPencere.once('ready-to-show', () => {
        anaPencere.show();
        anaPencere.focus();
    });

    // Geliştirici araçları (isteğe bağlı - production'da kapatılabilir)
    // Uncomment the line below to open DevTools in development
    // anaPencere.webContents.openDevTools();

    // Pencere kapatıldığında
    anaPencere.on('closed', () => {
        anaPencere = null;
    });

    // Menü oluştur
    const menuSablonu = [
        {
            label: 'Dosya',
            submenu: [
                {
                    label: 'Yeniden Yükle',
                    accelerator: 'CmdOrCtrl+R',
                    click: () => {
                        anaPencere.reload();
                    }
                },
                { type: 'separator' },
                {
                    label: 'Çıkış',
                    accelerator: 'CmdOrCtrl+Q',
                    click: () => {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Düzenle',
            submenu: [
                { label: 'Geri Al', accelerator: 'CmdOrCtrl+Z', role: 'undo' },
                { label: 'Yinele', accelerator: 'Shift+CmdOrCtrl+Z', role: 'redo' },
                { type: 'separator' },
                { label: 'Kes', accelerator: 'CmdOrCtrl+X', role: 'cut' },
                { label: 'Kopyala', accelerator: 'CmdOrCtrl+C', role: 'copy' },
                { label: 'Yapıştır', accelerator: 'CmdOrCtrl+V', role: 'paste' },
                { label: 'Tümünü Seç', accelerator: 'CmdOrCtrl+A', role: 'selectAll' }
            ]
        },
        {
            label: 'Görünüm',
            submenu: [
                { label: 'Tam Ekran', role: 'togglefullscreen' },
                { type: 'separator' },
                { label: 'Yakınlaştır', accelerator: 'CmdOrCtrl+Plus', role: 'zoomIn' },
                { label: 'Uzaklaştır', accelerator: 'CmdOrCtrl+-', role: 'zoomOut' },
                { label: 'Normal Boyut', accelerator: 'CmdOrCtrl+0', role: 'resetZoom' },
                { type: 'separator' },
                { label: 'Geliştirici Araçları', accelerator: 'F12', role: 'toggleDevTools' }
            ]
        },
        {
            label: 'Yardım',
            submenu: [
                {
                    label: 'Hakkında',
                    click: () => {
                        const { dialog } = require('electron');
                        dialog.showMessageBox(anaPencere, {
                            type: 'info',
                            title: 'TAKBİS Hakkında',
                            message: 'TAKBİS - Sistem Girişi',
                            detail: 'Tapu ve Kadastro Genel Müdürlüğü\nHer hakkı saklıdır. © 2020-' + new Date().getFullYear() + '\nDikmen Yolu No: 14 06100 Bakanlıklar Ankara\n\nSürüm: 1.0.0',
                            buttons: ['Tamam']
                        });
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(menuSablonu);
    Menu.setApplicationMenu(menu);
}

// Uygulama hazır olduğunda
app.whenReady().then(() => {
    anaPencereOlustur();

    // macOS için: dock'tan tıklandığında pencere yoksa yeniden oluştur
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            anaPencereOlustur();
        }
    });
});

// Tüm pencereler kapatıldığında (macOS hariç)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Güvenlik: Yeni pencere açma girişimlerini engelle
app.on('web-contents-created', (event, contents) => {
    contents.setWindowOpenHandler(() => {
        return { action: 'deny' };
    });
});
