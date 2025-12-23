// TAKBİS Mahalle-Köy Veritabanı Modülü

const mahalleVeritabani = {
    mahalleler: [
        {
            id: 123377,
            kod: 'M',
            adi: 'GAZİ',
            mahalle_koy: 1,
            kurum_ref: 1803,
            ilce_ref: 182,
            mahalle_grup_ref: null,
            ust_mahalle_ref: null,
            kadastro_mahalle_ref: null,
            baslangic_tarih: '1900-01-01',
            bitis_tarih: '3000-01-01',
            belge_ref: null,
            belediye_var: true,
            koy_yerlesim_plani_var: null,
            orman_durum_tip: null,
            orman_koyu: false,
            aktif: true,
            pasif_nedeni: null,
            tapulama_durum_tahdit: null,
            tapulama_durum_ilana_cikan: null,
            tapulama_durum_ilani_biten: null,
            tapulama_durum_devredilen: null,
            orman_durum: null,
            yerlesim_kod: null,
            bucak_ref: null,
            iller_idare_yerlesim_kod: null,
            eski_ilce_ref: null,
            bagli_oldugu_kurum_tip: 1,
            kadastro_kurum_ref: null,
            idari_sinir_mahallesi: null
        },
        {
            id: 123403,
            kod: 'M',
            adi: 'YUVA',
            mahalle_koy: 1,
            kurum_ref: 1803,
            ilce_ref: 182,
            mahalle_grup_ref: null,
            ust_mahalle_ref: null,
            kadastro_mahalle_ref: null,
            baslangic_tarih: '1900-01-01',
            bitis_tarih: '3000-01-01',
            belge_ref: null,
            belediye_var: true,
            koy_yerlesim_plani_var: false,
            orman_durum_tip: null,
            orman_koyu: false,
            aktif: true,
            pasif_nedeni: null,
            tapulama_durum_tahdit: null,
            tapulama_durum_ilana_cikan: null,
            tapulama_durum_ilani_biten: null,
            tapulama_durum_devredilen: null,
            orman_durum: null,
            yerlesim_kod: null,
            bucak_ref: null,
            iller_idare_yerlesim_kod: null,
            eski_ilce_ref: null,
            bagli_oldugu_kurum_tip: 1,
            kadastro_kurum_ref: null,
            idari_sinir_mahallesi: null
        },
        {
            id: 123401,
            kod: 'M',
            adi: 'KARDELEN',
            mahalle_koy: 1,
            kurum_ref: 1803,
            ilce_ref: 182,
            mahalle_grup_ref: null,
            ust_mahalle_ref: null,
            kadastro_mahalle_ref: null,
            baslangic_tarih: '1900-01-01',
            bitis_tarih: '3000-01-01',
            belge_ref: null,
            belediye_var: true,
            koy_yerlesim_plani_var: false,
            orman_durum_tip: null,
            orman_koyu: false,
            aktif: true,
            pasif_nedeni: null,
            tapulama_durum_tahdit: null,
            tapulama_durum_ilana_cikan: null,
            tapulama_durum_ilani_biten: null,
            tapulama_durum_devredilen: null,
            orman_durum: null,
            yerlesim_kod: null,
            bucak_ref: null,
            iller_idare_yerlesim_kod: null,
            eski_ilce_ref: null,
            bagli_oldugu_kurum_tip: 1,
            kadastro_kurum_ref: null,
            idari_sinir_mahallesi: null
        },
        {
            id: 123402,
            kod: 'M',
            adi: 'ERGAZİ',
            mahalle_koy: 1,
            kurum_ref: 1803,
            ilce_ref: 182,
            mahalle_grup_ref: null,
            ust_mahalle_ref: null,
            kadastro_mahalle_ref: null,
            baslangic_tarih: '1900-01-01',
            bitis_tarih: '3000-01-01',
            belge_ref: null,
            belediye_var: true,
            koy_yerlesim_plani_var: false,
            orman_durum_tip: null,
            orman_koyu: false,
            aktif: true,
            pasif_nedeni: null,
            tapulama_durum_tahdit: null,
            tapulama_durum_ilana_cikan: null,
            tapulama_durum_ilani_biten: null,
            tapulama_durum_devredilen: null,
            orman_durum: null,
            yerlesim_kod: null,
            bucak_ref: null,
            iller_idare_yerlesim_kod: null,
            eski_ilce_ref: null,
            bagli_oldugu_kurum_tip: 1,
            kadastro_kurum_ref: null,
            idari_sinir_mahallesi: null
        }
    ]
};

// Tüm mahalle/köyleri getir
function tumMahalleleriGetir() {
    return mahalleVeritabani.mahalleler;
}

// İlçeye göre mahalle ara
function ilceyeGoreMahalleAra(ilceRef) {
    return mahalleVeritabani.mahalleler.filter(m => m.ilce_ref === ilceRef);
}

// İsme göre mahalle ara
function mahalleAra(mahalleAdi) {
    return mahalleVeritabani.mahalleler.filter(m =>
        m.adi.toUpperCase().includes(mahalleAdi.toUpperCase())
    );
}

// Detaylı mahalle arama
function mahalleDetayliAra(kriterler) {
    return mahalleVeritabani.mahalleler.filter(m => {
        let eslesme = true;

        if (kriterler.adi && !m.adi.toUpperCase().includes(kriterler.adi.toUpperCase())) {
            eslesme = false;
        }
        if (kriterler.ilce_ref && m.ilce_ref !== kriterler.ilce_ref) {
            eslesme = false;
        }

        return eslesme;
    });
}
