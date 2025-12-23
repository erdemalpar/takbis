// TAKBİS Zemin Cins Veritabanı Modülü

const zeminCinsVeritabani = {
    zemin_cinsler: [
        {
            id: 112122866,
            zemin_ref: 1581686,
            tasinmaz_cins_ref: 1600000101,
            tesis_islem_ref: 156441583,
            terkin_islem_ref: null,
            tapu_bolum_durum: 2,
            tasinmaz_cins_aciklama: '4 Katlı Betonarme Apartman ve Arsası',
            sistem: null,
            sayisallastirma_sayfa_ref: null,
            nitelik_ref: null,
            belkis_degistirdi: 2
        },
        {
            id: 87506987,
            zemin_ref: 3783759,
            tasinmaz_cins_ref: 1600000101,
            tesis_islem_ref: 88976903,
            terkin_islem_ref: null,
            tapu_bolum_durum: 2,
            tasinmaz_cins_aciklama: '10 KATLI A-B-C-D BLOK APARTMAN-BETON VE ARSASI',
            sistem: null,
            sayisallastirma_sayfa_ref: null,
            nitelik_ref: null,
            belkis_degistirdi: 2
        }
    ]
};

// Tüm zemin cinslerini getir
function tumZeminCinsleriniGetir() {
    return zeminCinsVeritabani.zemin_cinsler;
}

// Zemine göre cins getir
function zemineGoreCinsGetir(zeminRef) {
    return zeminCinsVeritabani.zemin_cinsler.filter(zc => zc.zemin_ref === zeminRef);
}

// Zemin Cins ID'ye göre bul
function zeminCinsIDBul(zeminCinsId) {
    return zeminCinsVeritabani.zemin_cinsler.find(zc => zc.id === zeminCinsId);
}
