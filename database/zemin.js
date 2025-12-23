// TAKBİS Zemin Veritabanı Modülü

const zeminVeritabani = {
    zeminler: [
        {
            id: 1581686,
            parsel_ref: 933057,
            zabit_yer_ref: null,
            zemin_tip: 1,
            tasinmaz_kullanim_sekli: null,
            ust_zemin_ref: null,
            zemin_islem: 2,
            tesis_islem_ref: null,
            terkin_islem_ref: null,
            erisim_kod: '001',
            erisim_kod_root_ref: 1581686,
            tapu_bolum_durum: 2,
            km_kuruldu: true,
            islem_yapildi: true,
            kayit_tarihi: '2005-12-18',
            zemin_olusum_tip: 1,
            sistem: null,
            sayisallastirma_sayfa_ref: '00380000000000390531',
            silinecek: null
        },
        {
            id: 3783759,
            parsel_ref: 1660951,
            zabit_yer_ref: null,
            zemin_tip: 1,
            tasinmaz_kullanim_sekli: null,
            ust_zemin_ref: null,
            zemin_islem: 2,
            tesis_islem_ref: 3333559,
            terkin_islem_ref: null,
            erisim_kod: '01',
            erisim_kod_root_ref: 3783759,
            tapu_bolum_durum: 2,
            km_kuruldu: true,
            islem_yapildi: true,
            kayit_tarihi: '2006-02-19',
            zemin_olusum_tip: 1,
            sistem: null,
            sayisallastirma_sayfa_ref: '00370000000001104254',
            silinecek: 2
        }
    ]
};

// Tüm zeminleri getir
function tumZeminleriGetir() {
    return zeminVeritabani.zeminler;
}

// Parsele göre zeminleri getir
function parseleGoreZeminGetir(parselRef) {
    return zeminVeritabani.zeminler.filter(z => z.parsel_ref === parselRef);
}

// Zemin ID'ye göre zemin bul
function zeminIDBul(zeminId) {
    return zeminVeritabani.zeminler.find(z => z.id === zeminId);
}
