# TAKBİS Masaüstü Uygulaması

Bu proje, TAKBİS web uygulamasının Electron ile masaüstü uygulaması versiyonudur.

## Kurulum

1. **Node.js ve npm kurulumu:**
   - [Node.js](https://nodejs.org/) sitesinden LTS versiyonunu indirin ve kurun
   - Node.js kurulumu npm'i de içerir

2. **Proje bağımlılıklarını yükleyin:**
   ```bash
   npm install
   ```

## Geliştirme Modunda Çalıştırma

Uygulamayı test etmek için:

```bash
npm start
```

Bu komut Electron uygulamasını geliştirme modunda başlatır.

## Uygulama Derleme (EXE Oluşturma)

### Windows için EXE dosyası oluşturma:
```bash
npm run build:win
```

Bu komut `dist` klasöründe Windows kurulum dosyası (.exe) oluşturur.

### macOS için DMG dosyası oluşturma:
```bash
npm run build:mac
```

### Linux için AppImage/DEB oluşturma:
```bash
npm run build:linux
```

### Tüm platformlar için aynı anda:
```bash
npm run build:all
```

## Derleme Sonuçları

Derleme tamamlandıktan sonra `dist` klasöründe şunları bulacaksınız:

**Windows için:**
- `TAKBİS Sistem Setup 1.0.0.exe` - Kurulum dosyası
- `win-unpacked/` - Portable versiyon (zip'lenebilir)

**macOS için:**
- `TAKBİS Sistem-1.0.0.dmg` - macOS kurulum dosyası

**Linux için:**
- `TAKBİS-Sistem-1.0.0.AppImage` - AppImage dosyası
- `takbis-masaustu-uygulamasi_1.0.0_amd64.deb` - Debian/Ubuntu paketi

## İkon Dosyası (Opsiyonel)

Uygulamanın kendi ikonuna sahip olması için:

1. **Windows için:** `icon.ico` dosyası (256x256 veya 512x512 px)
2. **macOS için:** `icon.icns` dosyası
3. **Linux için:** `icon.png` dosyası (512x512 px)

Bu dosyaları proje kök dizinine ekleyin. İkon yoksa varsayılan Electron ikonu kullanılır.

## Özellikler

- ✅ Tam ekran desteği
- ✅ Türkçe menüler
- ✅ Klavye kısayolları
- ✅ Windows/macOS/Linux desteği
- ✅ Kurulum sihirbazı (NSIS)
- ✅ Masaüstü kısayolu oluşturma
- ✅ Geliştirici araçları (F12)

## Sistem Gereksinimleri

**Windows:**
- Windows 7 veya üzeri
- 64-bit veya 32-bit

**macOS:**
- macOS 10.11 (El Capitan) veya üzeri

**Linux:**
- Ubuntu 18.04 veya üzeri
- Fedora 32 veya üzeri
- Debian 10 veya üzeri

## Sorun Giderme

### "npm: command not found" hatası
- Node.js'in düzgün kurulmadığı anlamına gelir
- Node.js'i yeniden kurun ve terminal/command prompt'u yeniden başlatın

### Build hatası alıyorsanız
```bash
# node_modules klasörünü silin ve yeniden yükleyin
rm -rf node_modules
npm install
```

### Mac'te "App can't be opened" hatası
```bash
# Güvenlik ayarlarından izin verin veya komutu kullanın:
xattr -cr "TAKBİS Sistem.app"
```

## Lisans

Tapu ve Kadastro Genel Müdürlüğü. Her hakkı saklıdır. © 2020-2025

## Destek

Sorunlarınız için lütfen IT destek ekibinizle iletişime geçin.
