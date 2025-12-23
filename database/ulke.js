// TAKBİS Ülke Veritabanı Modülü

// Ülke verileri
const ulkeVeritabani = {
    ulkeler: [
        { ulke_id: 1, adi: 'Afganistan', resmi_adi: 'Afganistan', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 2, adi: 'Almanya', resmi_adi: 'Federal Almanya Cumhuriyeti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '13/07/2010', gecerlilik_bitis: '', aktif: true, aciklama: 'Mütekabiliyet anlaşması mevcut' },
        { ulke_id: 3, adi: 'ABD', resmi_adi: 'Amerika Birleşik Devletleri', edinim_tipi: 'Sınırlı', gecerlilik_baslama: '01/01/1985', gecerlilik_bitis: '', aktif: true, aciklama: 'Sadece ticari amaçlı' },
        { ulke_id: 4, adi: 'Andorra', resmi_adi: 'Andorra', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 5, adi: 'Angola', resmi_adi: 'Angola', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 6, adi: 'Antigua ve Barbuda', resmi_adi: 'Antigua ve Barbuda', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 7, adi: 'Arjantin', resmi_adi: 'Arjantin', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 8, adi: 'Arnavutluk', resmi_adi: 'Arnavutluk Cumhuriyeti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2008', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 9, adi: 'Aruba', resmi_adi: 'Aruba', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 10, adi: 'Avustralya', resmi_adi: 'Avustralya', edinim_tipi: 'Karşılıklı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: 'Mütekabiliyet var' },
        { ulke_id: 11, adi: 'Avusturya', resmi_adi: 'Avusturya Cumhuriyeti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 12, adi: 'Azerbaycan', resmi_adi: 'Azerbaycan Cumhuriyeti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/1992', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 13, adi: 'Bahama', resmi_adi: 'Bahama', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 14, adi: 'Bahreyn', resmi_adi: 'Bahreyn Krallığı', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 15, adi: 'Bangladeş', resmi_adi: 'Bangladeş', edinim_tipi: 'Sınırlı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 16, adi: 'Belçika', resmi_adi: 'Belçika Krallığı', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 17, adi: 'Brezilya', resmi_adi: 'Brezilya Federatif Cumhuriyeti', edinim_tipi: 'Karşılıklı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 18, adi: 'Bulgaristan', resmi_adi: 'Bulgaristan Cumhuriyeti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2007', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 19, adi: 'Çin', resmi_adi: 'Çin Halk Cumhuriyeti', edinim_tipi: 'Sınırlı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: 'Karşılıklılık ilkesi uygulanır' },
        { ulke_id: 20, adi: 'Danimarka', resmi_adi: 'Danimarka Krallığı', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 21, adi: 'Fransa', resmi_adi: 'Fransa Cumhuriyeti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 22, adi: 'Güney Sudan Cumhuriyeti', resmi_adi: 'Republic of South Sudan', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '09/07/2011', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 23, adi: 'Gürcistan', resmi_adi: 'Gürcistan', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2005', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 24, adi: 'Haiti', resmi_adi: 'Haiti Cumhuriyeti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 25, adi: 'Hindistan', resmi_adi: 'Hindistan Cumhuriyeti', edinim_tipi: 'Sınırlı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 26, adi: 'Hırvatistan', resmi_adi: 'Hırvatistan Cumhuriyeti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/07/2013', gecerlilik_bitis: '', aktif: true, aciklama: 'AB üyesi' },
        { ulke_id: 27, adi: 'Hollanda', resmi_adi: 'Hollanda Krallığı', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 28, adi: 'Hollanda Antilleri', resmi_adi: 'Hollanda Antilleri', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 29, adi: 'Honduras', resmi_adi: 'Honduras Cumhuriyeti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 30, adi: 'İngiltere', resmi_adi: 'Birleşik Krallık', edinim_tipi: 'Karşılıklı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: 'Mütekabiliyet anlaşması var' },
        { ulke_id: 31, adi: 'İran', resmi_adi: 'İran İslam Cumhuriyeti', edinim_tipi: 'Sınırlı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 32, adi: 'İrlanda', resmi_adi: 'İrlanda', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 33, adi: 'İspanya', resmi_adi: 'İspanya Krallığı', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 34, adi: 'İsrail', resmi_adi: 'İsrail Devleti', edinim_tipi: 'Karşılıklı', gecerlilik_baslama: '14/03/1996', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 35, adi: 'İsveç', resmi_adi: 'İsveç Krallığı', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 36, adi: 'İsviçre', resmi_adi: 'İsviçre Konfederasyonu', edinim_tipi: 'Karşılıklı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 37, adi: 'İtalya', resmi_adi: 'İtalya Cumhuriyeti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 38, adi: 'Japonya', resmi_adi: 'Japonya', edinim_tipi: 'Karşılıklı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: 'Mütekabiliyet var' },
        { ulke_id: 39, adi: 'Kanada', resmi_adi: 'Kanada', edinim_tipi: 'Karşılıklı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 40, adi: 'Katar', resmi_adi: 'Katar Devleti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 41, adi: 'Mısır', resmi_adi: 'Mısır Arap Cumhuriyeti', edinim_tipi: 'Karşılıklı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 42, adi: 'Norveç', resmi_adi: 'Norveç Krallığı', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 43, adi: 'Pakistan', resmi_adi: 'Pakistan İslam Cumhuriyeti', edinim_tipi: 'Sınırlı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 44, adi: 'Polonya', resmi_adi: 'Polonya Cumhuriyeti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/05/2004', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 45, adi: 'Portekiz', resmi_adi: 'Portekiz Cumhuriyeti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 46, adi: 'Romanya', resmi_adi: 'Romanya', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2007', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 47, adi: 'Rusya Federasyonu', resmi_adi: 'Rusya Federasyonu', edinim_tipi: 'Karşılıklı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: 'Mütekabiliyet protokolü imzalandı' },
        { ulke_id: 48, adi: 'Suudi Arabistan', resmi_adi: 'Suudi Arabistan Krallığı', edinim_tipi: 'Karşılıklı', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' },
        { ulke_id: 49, adi: 'Yunanistan', resmi_adi: 'Yunanistan Cumhuriyeti', edinim_tipi: 'Edinebilir', gecerlilik_baslama: '01/01/2000', gecerlilik_bitis: '', aktif: true, aciklama: '' }
    ]
};

// Tüm ülkeleri getir
function tumUlkeleriGetir() {
    return ulkeVeritabani.ulkeler;
}

// ID'ye göre ülke getir
function ulkeGetir(ulkeId) {
    return ulkeVeritabani.ulkeler.find(u => u.ulke_id === ulkeId);
}

// İsme göre ülke ara
function ulkeAra(arama) {
    const aramaTerimi = arama.toUpperCase();
    return ulkeVeritabani.ulkeler.filter(u =>
        u.adi.toUpperCase().includes(aramaTerimi) ||
        u.resmi_adi.toUpperCase().includes(aramaTerimi)
    );
}
