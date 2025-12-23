// TAKBİS Zemin Alan Veritabanı Modülü

const zeminAlanVeritabani = {
    zemin_alanlar: [
        {
            id: 1585949,
            zemin_ref: 1581686,
            alan: 1177,
            zabit_alan: null,
            birim_ref: 21,
            tesis_islem_ref: null,
            terkin_islem_ref: null,
            tapu_bolum_durum: 2,
            arsa_pay: null,
            arsa_payda: null,
            sistem: null,
            sayisallastirma_sayfa_ref: '00380000000000390531',
            yuzolcumu_arsa_payi_ref: '00380000000000390533',
            belkis_degistirdi: 2,
            bb_net_alan: null,
            bb_brut_alan: null
        },
        {
            id: 3197354,
            zemin_ref: 3783759,
            alan: 7552,
            zabit_alan: null,
            birim_ref: 21,
            tesis_islem_ref: 3333559,
            terkin_islem_ref: null,
            tapu_bolum_durum: 2,
            arsa_pay: null,
            arsa_payda: null,
            sistem: null,
            sayisallastirma_sayfa_ref: '00370000000001104254',
            yuzolcumu_arsa_payi_ref: '00370000000001104256',
            belkis_degistirdi: 2,
            bb_net_alan: null,
            bb_brut_alan: null
        }
    ]
};

// Tüm zemin alanlarını getir
function tumZeminAlanlariGetir() {
    return zeminAlanVeritabani.zemin_alanlar;
}

// Zemine göre alan getir
function zemineGoreAlanGetir(zeminRef) {
    return zeminAlanVeritabani.zemin_alanlar.filter(za => za.zemin_ref === zeminRef);
}

// Zemin Alan ID'ye göre bul
function zeminAlanIDBul(zeminAlanId) {
    return zeminAlanVeritabani.zemin_alanlar.find(za => za.id === zeminAlanId);
}
