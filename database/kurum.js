// TAKBİS Kurum Veritabanı Modülü

const kurumVeritabani = {
    kurumlar: [
        {
            id: 1031,
            kod: '1031',
            adi: 'YENİMAHALLE',
            kurum_tip: 4,
            ilce_ref: 182,
            yetkili_ad_soyad: null,
            ust_kurum_ref: 1867,
            erisim_kod: '001001005',
            ust_kadastro_ref: null,
            yonetmelik_hizmet_bolge_kodu: null,
            yonetmelik_hizmet_grup_kodu: null,
            basbakanlik_bolge_grup_kodu: null,
            posta_kodu: '',
            kalkinma_oncelik_derecesi: null,
            adres: 'Ragıp Tüzün Cad. Kaymakamlık Binası',
            telefon: '312-315 82 09',
            fax: '344 97 75',
            aciklama: '',
            varsayilan_odeme_yerleri_ref: 4026,
            aktif: true,
            belge_ref: 1,
            baslangic_tarih: '2012-03-24',
            bitis_tarih: null,
            kurum_calisma_saat_tip_ref: 1,
            yevmiye_alinabilir_tip: 2,
            yazisma_kod: 'B091TKG4068920',
            yazisma_makam_tip: 0,
            yevmiye_alabilir: true,
            sms_kodu: 'YNIMHLLE KM',
            vergi_no: null,
            otomatik_havale_kullanilsin: null,
            kaysis_birim_kodu: null,
            kep_adresi: null,
            eyp_versiyonu: null,
            basvuruda_islem_tanim_zorunlu: null,
            otomatik_havale_tipi: null,
            calisma_saatine_uyulacak: null,
            tescil_kontrol_aktif: null,
            ekutuk_aktif: null,
            ekutuk_aktif_zemin_tipleri: ''
        },
        {
            id: 1803,
            kod: '06054',
            adi: 'Yenimahalle',
            kurum_tip: 3,
            ilce_ref: 182,
            yetkili_ad_soyad: null,
            ust_kurum_ref: 2,
            erisim_kod: '001001093',
            ust_kadastro_ref: 1031,
            yonetmelik_hizmet_bolge_kodu: 1,
            yonetmelik_hizmet_grup_kodu: null,
            basbakanlik_bolge_grup_kodu: null,
            posta_kodu: null,
            kalkinma_oncelik_derecesi: null,
            adres: 'Barış mah. Barış cad. No:10 Yenimahalle - Demetevler / Ankara',
            telefon: '0312 551 25 17',
            fax: null,
            aciklama: null,
            varsayilan_odeme_yerleri_ref: 2238,
            aktif: true,
            belge_ref: 22355492,
            baslangic_tarih: '1900-01-01',
            bitis_tarih: '3000-01-01',
            kurum_calisma_saat_tip_ref: 1,
            yevmiye_alinabilir_tip: 2,
            yazisma_kod: null,
            yazisma_makam_tip: 1,
            yevmiye_alabilir: true,
            sms_kodu: 'YNIMHLLE TM',
            vergi_no: '9490386422',
            otomatik_havale_kullanilsin: true,
            kaysis_birim_kodu: null,
            kep_adresi: null,
            eyp_versiyonu: null,
            basvuruda_islem_tanim_zorunlu: true,
            otomatik_havale_tipi: 2,
            calisma_saatine_uyulacak: null,
            tescil_kontrol_aktif: true,
            ekutuk_aktif: true,
            ekutuk_aktif_zemin_tipleri: '2'
        }
    ]
};

// Tüm kurumları getir
function tumKurumlariGetir() {
    return kurumVeritabani.kurumlar;
}

// İlçeye göre kurumları getir
function ilceyeGoreKurumGetir(ilceRef) {
    return kurumVeritabani.kurumlar.filter(k => k.ilce_ref === ilceRef);
}

// Kurum tipine göre filtrele
function kurumTipineGoreGetir(kurumTip) {
    return kurumVeritabani.kurumlar.filter(k => k.kurum_tip === kurumTip);
}

// İsme göre kurum ara
function kurumAra(kurumAdi) {
    return kurumVeritabani.kurumlar.filter(k =>
        k.adi.toUpperCase().includes(kurumAdi.toUpperCase())
    );
}
