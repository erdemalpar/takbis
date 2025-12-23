// TAKBİS Bağımsız Bölüm Veritabanı Modülü

const bagimsizBolumVeritabani = {
    bagimsiz_bolumler: [
        // A Blok Örnekleri
        { id: 22368659, bina_ref: null, zemin_ref: 20418437, bagimsiz_bolum_no: 1, kat: '1', blok: 'A', giris: null, numarataj_ref: 1, bagimsiz_bolum_tip: 1, tapu_bolum_durum: 2, tesis_islem_ref: 88976038, terkin_islem_ref: null, kayit_tarihi: '2014-02-19', sistem: null },
        { id: 22368660, bina_ref: null, zemin_ref: 20418438, bagimsiz_bolum_no: 2, kat: '1', blok: 'A', giris: null, numarataj_ref: 1, bagimsiz_bolum_tip: 1, tapu_bolum_durum: 2, tesis_islem_ref: 88976038, terkin_islem_ref: null, kayit_tarihi: '2014-02-19', sistem: null },
        { id: 22368661, bina_ref: null, zemin_ref: 20418439, bagimsiz_bolum_no: 3, kat: '2', blok: 'A', giris: null, numarataj_ref: 1, bagimsiz_bolum_tip: 1, tapu_bolum_durum: 2, tesis_islem_ref: 88976038, terkin_islem_ref: null, kayit_tarihi: '2014-02-19', sistem: null },
        { id: 22368675, bina_ref: null, zemin_ref: 20418453, bagimsiz_bolum_no: 17, kat: 'ZEMİN', blok: 'A', giris: null, numarataj_ref: 1, bagimsiz_bolum_tip: 1, tapu_bolum_durum: 2, tesis_islem_ref: 88976038, terkin_islem_ref: null, kayit_tarihi: '2014-02-19', sistem: null },

        // B Blok Örnekleri
        { id: 22368678, bina_ref: null, zemin_ref: 20418456, bagimsiz_bolum_no: 1, kat: '1', blok: 'B', giris: null, numarataj_ref: 1, bagimsiz_bolum_tip: 1, tapu_bolum_durum: 2, tesis_islem_ref: 88976038, terkin_islem_ref: null, kayit_tarihi: '2014-02-19', sistem: null },
        { id: 22368694, bina_ref: null, zemin_ref: 20418472, bagimsiz_bolum_no: 17, kat: 'ZEMİN', blok: 'B', giris: null, numarataj_ref: 1, bagimsiz_bolum_tip: 1, tapu_bolum_durum: 2, tesis_islem_ref: 88976038, terkin_islem_ref: null, kayit_tarihi: '2014-02-19', sistem: null },

        // C Blok Örnekleri
        { id: 22368698, bina_ref: null, zemin_ref: 20418526, bagimsiz_bolum_no: 1, kat: '1', blok: 'C', giris: null, numarataj_ref: 1, bagimsiz_bolum_tip: 1, tapu_bolum_durum: 2, tesis_islem_ref: 88976038, terkin_islem_ref: null, kayit_tarihi: '2014-02-19', sistem: null },

        // D Blok Örnekleri
        { id: 22368718, bina_ref: null, zemin_ref: 20418546, bagimsiz_bolum_no: 1, kat: 'ZEMİN', blok: 'D', giris: null, numarataj_ref: 1, bagimsiz_bolum_tip: 1, tapu_bolum_durum: 2, tesis_islem_ref: 88976038, terkin_islem_ref: null, kayit_tarihi: '2014-02-19', sistem: null },
        { id: 22368719, bina_ref: null, zemin_ref: 20418547, bagimsiz_bolum_no: 2, kat: '1', blok: 'D', giris: null, numarataj_ref: 1, bagimsiz_bolum_tip: 1, tapu_bolum_durum: 2, tesis_islem_ref: 88976038, terkin_islem_ref: null, kayit_tarihi: '2014-02-19', sistem: null },

        // Diğer Binadan Örnekler
        { id: 34456952, bina_ref: null, zemin_ref: 1664091, bagimsiz_bolum_no: 6, kat: '1', blok: null, giris: null, numarataj_ref: 1, bagimsiz_bolum_tip: 1, tapu_bolum_durum: 2, tesis_islem_ref: 156440631, terkin_islem_ref: null, kayit_tarihi: '2019-04-16', sistem: null },
        { id: 34456953, bina_ref: null, zemin_ref: 1664092, bagimsiz_bolum_no: 13, kat: 'ZEMİN', blok: null, giris: null, numarataj_ref: 1, bagimsiz_bolum_tip: 1, tapu_bolum_durum: 2, tesis_islem_ref: 156440631, terkin_islem_ref: null, kayit_tarihi: '2019-04-16', sistem: null }
    ]
};

// Tüm bağımsız bölümleri getir
function tumBagimsizBolumleriGetir() {
    return bagimsizBolumVeritabani.bagimsiz_bolumler;
}

// Zemine göre bağımsız bölüm getir
function zemineGoreBagimsizBolumGetir(zeminRef) {
    return bagimsizBolumVeritabani.bagimsiz_bolumler.filter(bb => bb.zemin_ref === zeminRef);
}

// Bloka göre bağımsız bölüm getir
function blokGoreBagimsizBolumGetir(blok) {
    return bagimsizBolumVeritabani.bagimsiz_bolumler.filter(bb => bb.blok === blok);
}

// Bağımsız Bölüm ID'ye göre bul
function bagimsizBolumIDBul(bagimsizBolumId) {
    return bagimsizBolumVeritabani.bagimsiz_bolumler.find(bb => bb.id === bagimsizBolumId);
}
