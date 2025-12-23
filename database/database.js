/**
 * TAKBİS Veritabanı Modülü - JSON tabanlı basit veritabanı
 * TAKBİS Genel Veritabanı Yapılandırma ve Şema Modülü
 */

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
                { kolon_adi: 'kisi_sistem_no', veri_tipi: 'VARCHAR(20)', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'Sistem No' },
                { kolon_adi: 'tc_kimlik_no', veri_tipi: 'VARCHAR(11)', null_olabilir: true, anahtar: '', aciklama: 'T.C. Kimlik No' },
                { kolon_adi: 'vergi_no', veri_tipi: 'VARCHAR(10)', null_olabilir: true, anahtar: '', aciklama: 'Vergi Numarası' },
                { kolon_adi: 'soyadi', veri_tipi: 'VARCHAR(50)', null_olabilir: false, anahtar: '', aciklama: 'Soyadı' },
                { kolon_adi: 'adi', veri_tipi: 'VARCHAR(50)', null_olabilir: false, anahtar: '', aciklama: 'Adı' },
                { kolon_adi: 'bir_onceki_soyadi', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Bir Önceki Soyadı' },
                { kolon_adi: 'baba_adi', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Baba Adı' },
                { kolon_adi: 'ana_adi', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Ana Adı' },
                { kolon_adi: 'dogum_yeri', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Doğum Yeri' },
                { kolon_adi: 'dogum_tarihi', veri_tipi: 'DATE', null_olabilir: true, anahtar: '', aciklama: 'Doğum Tarihi' },
                { kolon_adi: 'dogum_tarihi_baslangic', veri_tipi: 'DATE', null_olabilir: true, anahtar: '', aciklama: 'Doğum Tarihi Başlangıç' },
                { kolon_adi: 'dogum_tarihi_bitis', veri_tipi: 'DATE', null_olabilir: true, anahtar: '', aciklama: 'Doğum Tarihi Bitiş' },
                { kolon_adi: 'il', veri_tipi: 'VARCHAR(30)', null_olabilir: true, anahtar: '', aciklama: 'İl' },
                { kolon_adi: 'ilce', veri_tipi: 'VARCHAR(30)', null_olabilir: true, anahtar: '', aciklama: 'İlçe' },
                { kolon_adi: 'mahalle_koy', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Mahalle/Köy' },
                { kolon_adi: 'cilt_no', veri_tipi: 'VARCHAR(10)', null_olabilir: true, anahtar: '', aciklama: 'Cilt Numarası' },
                { kolon_adi: 'aile_sira_no', veri_tipi: 'VARCHAR(10)', null_olabilir: true, anahtar: '', aciklama: 'Aile Sıra Numarası' },
                { kolon_adi: 'sira_no', veri_tipi: 'VARCHAR(10)', null_olabilir: true, anahtar: '', aciklama: 'Sıra Numarası' },
                { kolon_adi: 'uyruk', veri_tipi: 'VARCHAR(30)', null_olabilir: true, anahtar: '', aciklama: 'Uyruk' },
                { kolon_adi: 'cinsiyet', veri_tipi: 'VARCHAR(10)', null_olabilir: true, anahtar: '', aciklama: 'Cinsiyet' },
                { kolon_adi: 'vatandaslik_tip', veri_tipi: 'VARCHAR(30)', null_olabilir: true, anahtar: '', aciklama: 'Vatandaşlık Tipi' },
                { kolon_adi: 'engel_tip', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Engel Tipi' },
                { kolon_adi: 'islem_sistem_no', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'İşlem Sistem Numarası' }
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
                { kolon_adi: 'parsel_durumu', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Parsel Durumu' },
                { kolon_adi: 'parsel_tip', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Parsel Tipi' },
                { kolon_adi: 'kayit_sekli', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Kayıt Şekli' },
                { kolon_adi: 'tescil_tarih', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Tescil' },
                { kolon_adi: 'kadastroalan', veri_tipi: 'FLOAT', null_olabilir: true, anahtar: '', aciklama: 'Alan' },
                { kolon_adi: 'aktif', veri_tipi: 'BOOLEAN', null_olabilir: true, anahtar: '', aciklama: 'Aktif mi' }
            ]
        },
        {
            tablo_adi: 'zemin',
            aciklama: 'Zemin Bilgileri',
            kayit_sayisi: 2,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'parsel_ref', veri_tipi: 'INT', null_olabilir: false, anahtar: 'FOREIGN KEY', aciklama: 'Parsel' },
                { kolon_adi: 'zemin_tip', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Zemin Tipi' },
                { kolon_adi: 'erisim_kod', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Erişim Kodu' },
                { kolon_adi: 'tapu_bolum_durum', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'Bölüm Durumu' },
                { kolon_adi: 'km_kuruldu', veri_tipi: 'INT', null_olabilir: true, anahtar: '', aciklama: 'KM Kuruldu' },
                { kolon_adi: 'kayit_tarihi', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Kayıt' }
            ]
        },
        {
            tablo_adi: 'tuzel_kisi',
            aciklama: 'Tüzel Kişi Bilgileri Tablosu',
            kayit_sayisi: 13,
            kolonlar: [
                { kolon_adi: 'id', veri_tipi: 'INT', null_olabilir: false, anahtar: 'PRIMARY KEY', aciklama: 'ID' },
                { kolon_adi: 'adi', veri_tipi: 'VARCHAR(250)', null_olabilir: false, anahtar: '', aciklama: 'Kurum Adı' },
                { kolon_adi: 'vergi_no', veri_tipi: 'VARCHAR(20)', null_olabilir: true, anahtar: '', aciklama: 'Vergi No' },
                { kolon_adi: 'sicil_no', veri_tipi: 'VARCHAR(50)', null_olabilir: true, anahtar: '', aciklama: 'Sicil No' },
                { kolon_adi: 'tuzel_kisi_tip_adi', veri_tipi: 'VARCHAR(100)', null_olabilir: true, anahtar: '', aciklama: 'Tip Adı' },
                { kolon_adi: 'kayit_tarihi', veri_tipi: 'VARCHAR(30)', null_olabilir: true, anahtar: '', aciklama: 'Kayıt Tarihi' }
            ]
        }
    ]
};

const kisiVeritabani = {
    kisiler: [
        {
            kisi_sistem_no: '74440384',
            tc_kimlik_no: '23666443662',
            vergi_no: '',
            soyadi: 'ALPAR',
            adi: 'ŞEVKET SERDAL',
            bir_onceki_soyadi: '',
            baba_adi: 'ALİİHSAN',
            ana_adi: 'HANİFE İNCİ',
            dogum_yeri: 'ULA',
            dogum_tarihi: '14/01/1981',
            dogum_tarihi_baslangic: '14/01/1981',
            dogum_tarihi_bitis: '14/01/1981',
            il: 'MUĞLA',
            ilce: 'ULA',
            mahalle_koy: 'MERKEZ',
            cilt_no: '125',
            aile_sira_no: '45',
            sira_no: '12',
            uyruk: 'TÜRKİYE',
            cinsiyet: 'ERKEK',
            vatandaslik_tip: 'T.C. VATANDAŞI',
            engel_tip: '',
            islem_sistem_no: ''
        },
        {
            kisi_sistem_no: '16001379',
            tc_kimlik_no: '23666443662',
            vergi_no: '',
            soyadi: 'ALPAR',
            adi: 'ŞEVKET SERDAL',
            bir_onceki_soyadi: '',
            baba_adi: 'ALİİHSAN',
            ana_adi: 'HANİFE İNCİ',
            dogum_yeri: 'ULA',
            dogum_tarihi: '14/01/1981',
            dogum_tarihi_baslangic: '14/01/1981',
            dogum_tarihi_bitis: '14/01/1981',
            il: 'MUĞLA',
            ilce: 'ULA',
            mahalle_koy: 'MERKEZ',
            cilt_no: '125',
            aile_sira_no: '45',
            sira_no: '12',
            uyruk: 'TÜRKİYE',
            cinsiyet: 'ERKEK',
            vatandaslik_tip: 'T.C. VATANDAŞI',
            engel_tip: '',
            islem_sistem_no: ''
        },
        {
            kisi_sistem_no: '88990011',
            tc_kimlik_no: '11122233344',
            vergi_no: '1234567890',
            soyadi: 'YILMAZ',
            adi: 'MEHMET',
            bir_onceki_soyadi: '',
            baba_adi: 'ALİ',
            ana_adi: 'AYŞE',
            dogum_yeri: 'ANKARA',
            dogum_tarihi: '05/03/1975',
            dogum_tarihi_baslangic: '05/03/1975',
            dogum_tarihi_bitis: '05/03/1975',
            il: 'ANKARA',
            ilce: 'ÇANKAYA',
            mahalle_koy: 'BAHÇELIEVLER',
            cilt_no: '89',
            aile_sira_no: '23',
            sira_no: '7',
            uyruk: 'TÜRKİYE',
            cinsiyet: 'ERKEK',
            vatandaslik_tip: 'T.C. VATANDAŞI',
            engel_tip: '',
            islem_sistem_no: ''
        },
        {
            kisi_sistem_no: '55667788',
            tc_kimlik_no: '98765432109',
            vergi_no: '',
            soyadi: 'KAYA',
            adi: 'FATİH',
            bir_onceki_soyadi: '',
            baba_adi: 'MUSTAFA',
            ana_adi: 'ZEYNEP',
            dogum_yeri: 'İSTANBUL',
            dogum_tarihi: '12/08/1990',
            dogum_tarihi_baslangic: '12/08/1990',
            dogum_tarihi_bitis: '12/08/1990',
            il: 'İSTANBUL',
            ilce: 'KADIKÖY',
            mahalle_koy: 'GÖZTEPE',
            cilt_no: '456',
            aile_sira_no: '78',
            sira_no: '34',
            uyruk: 'TÜRKİYE',
            cinsiyet: 'ERKEK',
            vatandaslik_tip: 'T.C. VATANDAŞI',
            engel_tip: '',
            islem_sistem_no: ''
        }
    ]
};

// Kişi sistem numarasına göre sorgulama
function kisiSistemNoIleSorgula(sistemNo) {
    return kisiVeritabani.kisiler.filter(kisi => kisi.kisi_sistem_no === sistemNo);
}

// TC Kimlik numarasına göre sorgulama
function tcKimlikNoIleSorgula(tcNo) {
    return kisiVeritabani.kisiler.filter(kisi => kisi.tc_kimlik_no === tcNo);
}

// Detaylı arama
function detayliArama(kriterler) {
    return kisiVeritabani.kisiler.filter(kisi => {
        let eslesme = true;
        if (kriterler.soyadi && !kisi.soyadi.toUpperCase().includes(kriterler.soyadi.toUpperCase())) eslesme = false;
        if (kriterler.adi && !kisi.adi.toUpperCase().includes(kriterler.adi.toUpperCase())) eslesme = false;
        if (kriterler.baba_adi && !kisi.baba_adi.toUpperCase().includes(kriterler.baba_adi.toUpperCase())) eslesme = false;
        if (kriterler.ana_adi && !kisi.ana_adi.toUpperCase().includes(kriterler.ana_adi.toUpperCase())) eslesme = false;
        if (kriterler.dogum_yeri && !kisi.dogum_yeri.toUpperCase().includes(kriterler.dogum_yeri.toUpperCase())) eslesme = false;
        return eslesme;
    });
}

// Tüm kişileri getir
function tumKisileriGetir() {
    return kisiVeritabani.kisiler;
}

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
        case 'tuzel_kisi': return (typeof tumTuzelKisileriGetir === 'function') ? tumTuzelKisileriGetir() : [];
        default: return [];
    }
}

// Modül olarak export et
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        kisiSistemNoIleSorgula,
        tcKimlikNoIleSorgula,
        detayliArama,
        tumKisileriGetir,
        veritabaniSemasiGetir,
        tabloVerileriniGetir
    };
}
