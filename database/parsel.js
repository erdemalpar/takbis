// TAKBİS Parsel Veritabanı Modülü

const parselVeritabani = {
    parseller: [
        {
            id: 1660951,
            mahalle_ref: 123403,
            pafta_no: null,
            ada_no: 43230,
            parsel_no: 2,
            parsel_durumu: 4,
            parsel_tip: 1,
            tescil_tarih: '1998-03-20',
            terkin_tarih: null,
            davali_tip: null,
            mevkii: null,
            aktif: true,
            koy_icinde: false,
            koy_yerlesim_plani_icinde: false,
            kayit_sekli: 2,
            tesis_islem_ref: 3333559,
            terkin_islem_ref: null,
            kadastro_alan: null,
            kadastro_pafta_olcegi: null,
            eski_mahalle_ref: null,
            belge_ref: null,
            kadastro_mahalle_ref: 169795,
            sistem: null,
            aciklama: null,
            kullanici: null,
            kayit_tarih: null
        },
        {
            id: 933057,
            mahalle_ref: 123377,
            pafta_no: null,
            ada_no: 5821,
            parsel_no: 38,
            parsel_durumu: 4,
            parsel_tip: 1,
            tescil_tarih: null,
            terkin_tarih: null,
            davali_tip: null,
            mevkii: null,
            aktif: true,
            koy_icinde: null,
            koy_yerlesim_plani_icinde: null,
            kayit_sekli: 2,
            tesis_islem_ref: null,
            terkin_islem_ref: null,
            kadastro_alan: null,
            kadastro_pafta_olcegi: null,
            eski_mahalle_ref: null,
            belge_ref: null,
            kadastro_mahalle_ref: 56877,
            sistem: null,
            aciklama: null,
            kullanici: null,
            kayit_tarih: null
        }
    ]
};

// Tüm parselleri getir
function tumParselleriGetir() {
    return parselVeritabani.parseller;
}

// Mahalleye göre parselleri getir
function mahalleyeGoreParselGetir(mahalleRef) {
    return parselVeritabani.parseller.filter(p => p.mahalle_ref === mahalleRef);
}

// Ada ve parsel numarasına göre parsel bul
function adaParselNoIleParselBul(adaNo, parselNo) {
    return parselVeritabani.parseller.find(p =>
        p.ada_no === adaNo && p.parsel_no === parselNo
    );
}

// Detaylı parsel arama
function parselDetayliAra(kriterler) {
    return parselVeritabani.parseller.filter(p => {
        let eslesme = true;

        if (kriterler.mahalle_ref && p.mahalle_ref !== kriterler.mahalle_ref) {
            eslesme = false;
        }
        if (kriterler.ada_no && p.ada_no !== kriterler.ada_no) {
            eslesme = false;
        }
        if (kriterler.parsel_no && p.parsel_no !== kriterler.parsel_no) {
            eslesme = false;
        }

        return eslesme;
    });
}
