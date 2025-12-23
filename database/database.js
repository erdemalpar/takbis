// TAKBİS Genel Veritabanı Yapılandırma ve Şema Modülü

// Veritabanı Şeması (Metadata)
const veritabaniSemasi = {
    veritabani_adi: 'TAKBIS',
    aciklama: 'Tapu ve Kadastro Bilgi Sistemi Veritabanı',
    tablolar: [
        {
            tablo_adi: 'kisi',
            aciklama: 'Kişi Bilgileri Tablosu',
            kayit_sayisi: 4,
            kolonlar: [
                { kolon_adi: 'kisi_sistem_no', veri_tipi: 'VARCHAR(20)', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'Kişi Sistem Numarası' },
                { kolon_adi: 'tc_kimlik_no', veri_tipi: 'VARCHAR(11)', null_olabilir: true, anahtar: '', aciklama: 'T.C. Kimlik Numarası' },
                { kolon_adi: 'vergi_no', veri_tipi: 'VARCHAR(10)', null_olabilir: true, anahtar: '', aciklama: 'Vergi Numarası' },
                { kolon_adi: 'soyadi', veri_tipi: 'VARCHAR(50)', null_olabilir: false, anahtar: '', aciklama: 'Soyadı' },
                { kolon_adi: 'adi', veri_tipi: 'VARCHAR(50)', null_olabilir: false, anahtar: '', aciklama: 'Adı' },
                { kolon_adi: 'baba_adi', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Baba Adı' },
                { kolon_adi: 'ana_adi', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Ana Adı' },
                { kolon_adi: 'dogum_yeri', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Doğum Yeri' },
                { kolon_adi: 'dogum_tarihi', veri_tipi: 'DATE', null_olabilir: true, anahtar: '', aciklama: 'Doğum Tarihi' },
                { kolon_adi: 'il', veri_tipi: 'VARCHAR(30)', null_olabilir: true, anahtar: '', aciklama: 'İl' },
                { kolon_adi: 'ilce', veri_tipi: 'VARCHAR(30)', null_olabilir: true, anahtar: '', aciklama: 'İlçe' },
                { kolon_adi: 'uyruk', veri_tipi: 'VARCHAR(30)', null_olabilir: true, anahtar: '', aciklama: 'Uyruk' }
            ]
        },
        {
            tablo_adi: 'ulke',
            aciklama: 'Ülke Tanımları',
            kayit_sayisi: 49,
            kolonlar: [
                { kolon_adi: 'ulke_id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'adi', veri_tipi: 'VARCHAR(100)', null_olabilir: false, anahtar: '', aciklama: 'Adı' },
                { kolon_adi: 'resmi_adi', veri_tipi: 'VARCHAR(200)', null_olabilir: false, anahtar: '', aciklama: 'Resmi Adı' },
                { kolon_adi: 'edinim_tipi', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Edinim Tipi' },
                { kolon_adi: 'gecerlilik_baslama', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Başlangıç' },
                { kolon_adi: 'aktif', veri_tipi: 'BOOLEAN', null_olabilir: false, anahtar: '', aciklama: 'Aktif mi' },
                { kolon_adi: 'aciklama', veri_tipi: 'TEXT', null_olabilir: true, anahtar: '', aciklama: 'Açıklama' }
            ]
        },
        {
            tablo_adi: 'il',
            aciklama: 'İl Bilgileri',
            kayit_sayisi: 1,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'adi', veri_tipi: 'VARCHAR(100)', null_olabilir: false, anahtar: '', aciklama: 'Adı' },
                { kolon_adi: 'kisa_adi', veri_tipi: 'VARCHAR(10)', null_olabilir: true, anahtar: '', aciklama: 'Kısa Adı' },
                { kolon_adi: 'bolge_ref', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Bölge Ref' },
                { kolon_adi: 'trafik_kod', veri_tipi: 'VARCHAR(2)', null_olabilir: true, anahtar: '', aciklama: 'Trafik Kod' },
                { kolon_adi: 'baslangic_tarih', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Başlangıç' },
                { kolon_adi: 'aktif', veri_tipi: 'BOOLEAN', null_olabilir: true, anahtar: '', aciklama: 'Aktif' },
                { kolon_adi: 'kiyi_sinir_ili', veri_tipi: 'BOOLEAN', null_olabilir: true, anahtar: '', aciklama: 'Kıyı İli' },
                { kolon_adi: 'yerlesim_kod', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Yerleşim Kodu' }
            ]
        },
        {
            tablo_adi: 'ilce',
            aciklama: 'İlçe Bilgileri',
            kayit_sayisi: 1,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'adi', veri_tipi: 'VARCHAR(100)', null_olabilir: false, anahtar: '', aciklama: 'İlçe Adı' },
                { kolon_adi: 'il_ref', veri_tipi: 'INT', null_olabilir: false, anahtar: 'FOREIGN KEY', aciklama: 'İl Ref' },
                { kolon_adi: 'sira_no', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Sıra No' },
                { kolon_adi: 'baslangic_tarih', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Başlangıç' },
                { kolon_adi: 'aktif', veri_tipi: 'BOOLEAN', null_olabilir: true, anahtar: '', aciklama: 'Aktif' },
                { kolon_adi: 'merkez_ilce', veri_tipi: 'BOOLEAN', null_olabilir: true, anahtar: '', aciklama: 'Merkez mi' }
            ]
        },
        {
            tablo_adi: 'mahalle',
            aciklama: 'Mahalle-Köy Bilgileri',
            kayit_sayisi: 2,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'kod', veri_tipi: 'VARCHAR(10)', null_olabilir: true, anahtar: '', aciklama: 'Kod' },
                { kolon_adi: 'adi', veri_tipi: 'VARCHAR(100)', null_olabilir: false, anahtar: '', aciklama: 'Adı' },
                { kolon_adi: 'mahalle_koy', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Tip (1:Mah, 2:Köy)' },
                { kolon_adi: 'kurum_ref', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Kurum Ref' },
                { kolon_adi: 'ilce_ref', veri_tipi: 'INT', null_olabilir: true, anahtar: 'FOREIGN KEY', aciklama: 'İlçe Ref' },
                { kolon_adi: 'baslangic_tarih', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Başlangıç' },
                { kolon_adi: 'aktif', veri_tipi: 'BOOLEAN', null_olabilir: true, anahtar: '', aciklama: 'Aktif' },
                { kolon_adi: 'belediye_var', veri_tipi: 'BOOLEAN', null_olabilir: true, anahtar: '', aciklama: 'Belediye Var' }
            ]
        },
        {
            tablo_adi: 'kurum',
            aciklama: 'Kurum Bilgileri',
            kayit_sayisi: 2,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'kod', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Kod' },
                { kolon_adi: 'adi', veri_tipi: 'VARCHAR(250)', null_olabilir: false, anahtar: '', aciklama: 'Adı' },
                { kolon_adi: 'kurum_tip', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Tip' },
                { kolon_adi: 'ilce_ref', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'İlçe Ref' },
                { kolon_adi: 'adres', veri_tipi: 'VARCHAR(500)', null_olabilir: true, anahtar: '', aciklama: 'Adres' },
                { kolon_adi: 'telefon', veri_tipi: 'VARCHAR(100)', null_olabilir: true, anahtar: '', aciklama: 'Telefon' },
                { kolon_adi: 'vergi_no', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Vergi No' },
                { kolon_adi: 'aktif', veri_tipi: 'BOOLEAN', null_olabilir: true, anahtar: '', aciklama: 'Aktif' },
                { kolon_adi: 'ekutuk_aktif', veri_tipi: 'BOOLEAN', null_olabilir: true, anahtar: '', aciklama: 'e-Kütük' }
            ]
        },
        {
            tablo_adi: 'parsel',
            aciklama: 'Parsel Bilgileri',
            kayit_sayisi: 2,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'mahalle_ref', veri_tipi: 'INT', null_olabilir: false, anahtar: 'FOREIGN KEY', aciklama: 'Mahalle' },
                { kolon_adi: 'pafta_no', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Pafta' },
                { kolon_adi: 'ada_no', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Ada' },
                { kolon_adi: 'parsel_no', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Parsel' },
                {
                    kolon_adi: 'parsel_durumu',
                    veri_tipi: 'INT',
                    null_olabilir: true,
                    anahtar: '',
                    aciklama: 'Parsel Durumu (0:Bilinmiyor, 1:Taslak, 2:Ölecek, 3:Ölü, 4:Yaşayan)'
                },
                {
                    kolon_adi: 'parsel_tip',
                    veri_tipi: 'INT',
                    null_olabilir: true,
                    anahtar: '',
                    aciklama: 'Parsel Tipi (0:Bilinmiyor, 1:İmar Parseli, 2:Kadastro Parseli, 3:İhdas Parseli, 4:Terk Parseli, 5:DOP, 6:Hisse Terk Parseli, 7:Geçici Parsel, 8:Kamu Ortaklık Payı)'
                },
                {
                    kolon_adi: 'kayit_sekli',
                    veri_tipi: 'INT',
                    null_olabilir: true,
                    anahtar: '',
                    aciklama: 'Kayıt Şekli (0:Bilinmiyor, 1:Toplu Veri Aktarım, 2:Tapu, 3:Kadastro, 4:İmar İşleminin İptali (Dop/K), 5:Doptan Parsel Oluşturma)'
                },
                { kolon_adi: 'tescil_tarih', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Tescil' },
                { kolon_adi: 'kadastroalan', veri_tipi: 'FLOAT', null_olabilir: true, anahtar: '', aciklama: 'Alan' },
                {
                    kolon_adi: 'aktif',
                    veri_tipi: 'BOOLEAN',
                    null_olabilir: true,
                    anahtar: '',
                    aciklama: 'Aktif mi (0:Bilinmiyor, 1:Aktif, 2:Pasif)'
                }
            ]
        },
        {
            tablo_adi: 'zemin',
            aciklama: 'Zemin Bilgileri',
            kayit_sayisi: 2,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'parsel_ref', veri_tipi: 'INT', null_olabilir: false, anahtar: 'FOREIGN KEY', aciklama: 'Parsel' },
                {
                    kolon_adi: 'zemin_tip',
                    veri_tipi: 'INT',
                    null_olabilir: true,
                    anahtar: '',
                    aciklama: 'Zemin Tipi (0:Bilinmiyor, 1:Ana Taşınmaz, 2:Kat Mülkiyeti, 3:Daimi Müstakil Hak, 4:Muhdesat, 5:Kamu Orta Malı)'
                },
                { kolon_adi: 'erisim_kod', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Erişim Kodu' },
                {
                    kolon_adi: 'tapu_bolum_durum',
                    veri_tipi: 'INT',
                    null_olabilir: true,
                    anahtar: '',
                    aciklama: 'Tapu Bölüm Durumu (0:Bilinmiyor, 1:Taslak, 2:Aktif, 3:Pasif, 4:KMAktifYapacak, 5:Red, 6:SarfiNazar, 7:ZamanAsimindanPasif)'
                },
                {
                    kolon_adi: 'km_kuruldu',
                    veri_tipi: 'INT',
                    null_olabilir: true,
                    anahtar: '',
                    aciklama: 'KM Kuruldu (0:AT, 1:KM, 2:Kİ, 3:DevreMülk)'
                },
                { kolon_adi: 'kayit_tarihi', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Kayıt' }
            ]
        },
        {
            tablo_adi: 'zeminCins',
            aciklama: 'Zemin Cins Bilgileri',
            kayit_sayisi: 2,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'zemin_ref', veri_tipi: 'INT', null_olabilir: false, anahtar: 'FOREIGN KEY', aciklama: 'Zemin' },
                { kolon_adi: 'tasinmaz_cins_ref', veri_tipi: 'BIGINT', null_olabilir: true, anahtar: '', aciklama: 'Cins Ref' },
                { kolon_adi: 'tasinmaz_cins_aciklama', veri_tipi: 'VARCHAR(500)', null_olabilir: true, anahtar: '', aciklama: 'Açıklama' }
            ]
        },
        {
            tablo_adi: 'zeminAlan',
            aciklama: 'Zemin Alan Bilgileri',
            kayit_sayisi: 2,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'zemin_ref', veri_tipi: 'INT', null_olabilir: false, anahtar: 'FOREIGN KEY', aciklama: 'Zemin' },
                { kolon_adi: 'alan', veri_tipi: 'FLOAT', null_olabilir: false, anahtar: '', aciklama: 'Alan (m2)' },
                { kolon_adi: 'arsa_pay', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Pay' },
                { kolon_adi: 'arsa_payda', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Payda' }
            ]
        },
        {
            tablo_adi: 'bagimsizBolum',
            aciklama: 'Bağımsız Bölüm Bilgileri',
            kayit_sayisi: 11,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'zemin_ref', veri_tipi: 'INT', null_olabilir: false, anahtar: 'FOREIGN KEY', aciklama: 'Zemin' },
                { kolon_adi: 'bagimsiz_bolum_no', veri_tipi: 'INT', null_olabilir: false, anahtar: '', aciklama: 'No' },
                { kolon_adi: 'kat', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Kat' },
                { kolon_adi: 'blok', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Blok' },
                { kolon_adi: 'kayit_tarihi', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Kayıt' }
            ]
        },
        {
            tablo_adi: 'bagimsizBolumCins',
            aciklama: 'Bağımsız Bölüm Cins Bilgileri',
            kayit_sayisi: 13,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'zemin_ref', veri_tipi: 'INT', null_olabilir: false, anahtar: 'FOREIGN KEY', aciklama: 'Zemin' },
                { kolon_adi: 'tasinmaz_cins_aciklama', veri_tipi: 'VARCHAR(500)', null_olabilir: true, anahtar: '', aciklama: 'Açıklama' }
            ]
        },
        {
            tablo_adi: 'tuzel_kisi',
            aciklama: 'Tüzel Kişi Bilgileri Tablosu',
            kayit_sayisi: 13,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'tuzel_kisi_tip_ref', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Tip Ref' },
                { kolon_adi: 'adi', veri_tipi: 'VARCHAR(250)', null_olabilir: false, anahtar: '', aciklama: 'Kurum Adı' },
                { kolon_adi: 'vergi_no', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Vergi No' },
                { kolon_adi: 'sicil_no', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Sicil No' },
                { kolon_adi: 'faal_mi', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Faal mi' },
                { kolon_adi: 'tuzel_kisi_tip_adi', veri_tipi: 'VARCHAR(100)', null_olabilir: true, anahtar: '', aciklama: 'Tip Adı' },
                { kolon_adi: 'gercek_adi', veri_tipi: 'VARCHAR(250)', null_olabilir: true, anahtar: '', aciklama: 'Gerçek Adı' },
                { kolon_adi: 'kayit_tarihi', veri_tipi: 'VARCHAR(30)', null_olabilir: true, anahtar: '', aciklama: 'Kayıt Tarihi' },
                { kolon_adi: 'mersis_no', veri_tipi: 'VARCHAR(30)', null_olabilir: true, anahtar: '', aciklama: 'Mersis No' }
            ]
        },
        {
            tablo_adi: 'yabanci_kisi',
            aciklama: 'Yabancı Kişi Sorgu ve Kayıt İşlemleri',
            kayit_sayisi: 1,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'yabanci_kimlik_no', veri_tipi: 'VARCHAR(15)', null_olabilir: false, anahtar: '', aciklama: 'Yabancı Kimlik No' },
                { kolon_adi: 'adi', veri_tipi: 'VARCHAR(50)', null_olabilir: false, anahtar: '', aciklama: 'Adı' },
                { kolon_adi: 'soyadi', veri_tipi: 'VARCHAR(50)', null_olabilir: false, anahtar: '', aciklama: 'Soyadı' },
                { kolon_adi: 'dogum_tarihi', veri_tipi: 'VARCHAR(15)', null_olabilir: true, anahtar: '', aciklama: 'Doğum Tarihi' },
                { kolon_adi: 'dogum_uyruk', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Doğum Uyruk' },
                { kolon_adi: 'kisi_uyruk', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Kişi Uyruk' },
                { kolon_adi: 'dosya_no', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Dosya No' }
            ]
        }
    ]
};

// Veritabanı şemasını getir
function veritabaniSemasiGetir() {
    return veritabaniSemasi;
}

// Tablo verilerini getir
function tabloVerileriniGetir(tabloAdi) {
    switch (tabloAdi) {
        case 'kisi': return (typeof kisiVeritabani !== 'undefined') ? kisiVeritabani.kisiler : [];
        case 'ulke': return (typeof tumUlkeleriGetir === 'function') ? tumUlkeleriGetir() : [];
        case 'il': return (typeof tumIlleriGetir === 'function') ? tumIlleriGetir() : [];
        case 'ilce': return (typeof tumIlceleriGetir === 'function') ? tumIlceleriGetir() : [];
        case 'mahalle': return (typeof tumMahalleleriGetir === 'function') ? tumMahalleleriGetir() : [];
        case 'kurum': return (typeof tumKurumlariGetir === 'function') ? tumKurumlariGetir() : [];
        case 'parsel': return (typeof tumParselleriGetir === 'function') ? tumParselleriGetir() : [];
        case 'zemin': return (typeof tumZeminleriGetir === 'function') ? tumZeminleriGetir() : [];
        case 'zeminCins': return (typeof tumZeminCinsleriniGetir === 'function') ? tumZeminCinsleriniGetir() : [];
        case 'zeminAlan': return (typeof tumZeminAlanlariGetir === 'function') ? tumZeminAlanlariGetir() : [];
        case 'bagimsizBolum': return (typeof tumBagimsizBolumleriGetir === 'function') ? tumBagimsizBolumleriGetir() : [];
        case 'bagimsizBolumCins': return (typeof tumBagimsizBolumCinsleriniGetir === 'function') ? tumBagimsizBolumCinsleriniGetir() : [];
        case 'tuzel_kisi': return (typeof tumTuzelKisileriGetir === 'function') ? tumTuzelKisileriGetir() : [];
        case 'yabanci_kisi': return (typeof tumYabanciKisileriGetir === 'function') ? tumYabanciKisileriGetir() : [];
        default: return [];
    }
}

// Modül olarak export et
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        veritabaniSemasiGetir,
        tabloVerileriniGetir
    };
}
