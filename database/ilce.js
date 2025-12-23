// TAKBİS İlçe Veritabanı Modülü

const ilceVeritabani = {
    ilceler: [
        {
            id: 182,
            sira_no: 24,
            adi: 'YENİMAHALLE',
            il_ref: 28,
            birim_ref: null,
            kisa_adi: 'YENİMAHALLE',
            norm_deger: 3,
            baslangic_tarih: '1900-01-01',
            bitis_tarih: '3000-01-01',
            belge_ref: null,
            aktif: true,
            kadastro_ilce_ref: 376,
            yerlesim_kod: '2,444',
            merkez_ilce: true,
            arsa_ofisi_izin_gerekli: true
        }
    ]
};

// Tüm ilçeleri getir
function tumIlceleriGetir() {
    return ilceVeritabani.ilceler;
}

// İle göre ilçeleri getir
function ilceIleGoreGetir(ilRef) {
    return ilceVeritabani.ilceler.filter(ilce => ilce.il_ref === ilRef);
}

// İsme göre ilçe ara
function ilceAra(ilceAdi) {
    return ilceVeritabani.ilceler.filter(ilce =>
        ilce.adi.toUpperCase().includes(ilceAdi.toUpperCase())
    );
}
