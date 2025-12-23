// TAKBİS Tüzel Kişi Veritabanı Modülü

const tuzelKisiVeritabani = {
    tuzel_kisiler: [
        { id: 47, tuzel_kisi_tip_ref: 16, adi: 'MALİYE HAZİNESİ', vergi_no: '6110312806', sicil_no: '25425', yabanci_temsilci_mi: 2, yabanci_sermayeli_mi: 2, ulke_ref: 210, il_ref: null, faal_mi: 1, kapanis_tarihi: null, aciklama: '', tuzel_kisi_tip_adi: 'Hazine', aktif_mi: 1, aktarildigi_tuzel_kisi_ref: null, sistem: null, toplu_birlestirme_yapildi: null, gercek_adi: 'MALİYE HAZİNESİ', sayisallastirma_kisiler_ref: null, tuzel_kisi_sabit_id: 1797, kayit_tarihi: null, ilce_ref: null, referans: null, valilik_iznine_tabi_mi: null, kanuna_tabi_mi: null, mersis_no: null },
        { id: 4686598, tuzel_kisi_tip_ref: 18, adi: 'YENİMAHALLE BELEDİYE', vergi_no: null, sicil_no: null, yabanci_temsilci_mi: null, yabanci_sermayeli_mi: null, ulke_ref: null, il_ref: null, faal_mi: null, kapanis_tarihi: null, aciklama: null, tuzel_kisi_tip_adi: null, aktif_mi: 2, aktarildigi_tuzel_kisi_ref: 15998, sistem: 2143660, toplu_birlestirme_yapildi: null, gercek_adi: 'YENİMAHALLE BELEDİYE', sayisallastirma_kisiler_ref: null, tuzel_kisi_sabit_id: null, kayit_tarihi: '2007-01-23 11:09:32.123', ilce_ref: null, referans: null, valilik_iznine_tabi_mi: null, kanuna_tabi_mi: null, mersis_no: null },
        { id: 5, tuzel_kisi_tip_ref: 143, adi: 'EGE İNŞ.MALZ.PAZ.A.Ş.', vergi_no: null, sicil_no: null, yabanci_temsilci_mi: 2, yabanci_sermayeli_mi: 2, ulke_ref: null, il_ref: null, faal_mi: 1, kapanis_tarihi: null, aciklama: '', tuzel_kisi_tip_adi: 'Anonim Şirketler', aktif_mi: 2, aktarildigi_tuzel_kisi_ref: 4939643, sistem: null, toplu_birlestirme_yapildi: null, gercek_adi: 'EGE İNŞ.MALZ.PAZ.A.Ş.', sayisallastirma_kisiler_ref: null, tuzel_kisi_sabit_id: null, kayit_tarihi: null, ilce_ref: null, referans: null, valilik_iznine_tabi_mi: null, kanuna_tabi_mi: null, mersis_no: null },
        { id: 6, tuzel_kisi_tip_ref: 143, adi: 'GELİŞİM DAYANIKLI TÜKETİM MALLARI PAZ.A.Ş.', vergi_no: null, sicil_no: null, yabanci_temsilci_mi: 2, yabanci_sermayeli_mi: 2, ulke_ref: null, il_ref: null, faal_mi: 1, kapanis_tarihi: null, aciklama: '', tuzel_kisi_tip_adi: 'Anonim Şirketler', aktif_mi: 2, aktarildigi_tuzel_kisi_ref: 1063, sistem: null, toplu_birlestirme_yapildi: null, gercek_adi: 'GELİŞİM DAYANIKLI TÜKETİM MALLARI PAZ.A.Ş.', sayisallastirma_kisiler_ref: null, tuzel_kisi_sabit_id: null, kayit_tarihi: null, ilce_ref: null, referans: null, valilik_iznine_tabi_mi: null, kanuna_tabi_mi: null, mersis_no: null },
        { id: 7, tuzel_kisi_tip_ref: 143, adi: 'GELİŞİM DAYANIKLI TÜKETYM MALLARI PAZARI', vergi_no: '3910070716', sicil_no: null, yabanci_temsilci_mi: 2, yabanci_sermayeli_mi: 2, ulke_ref: null, il_ref: null, faal_mi: 1, kapanis_tarihi: null, aciklama: '', tuzel_kisi_tip_adi: 'Anonim Şirketler', aktif_mi: 2, aktarildigi_tuzel_kisi_ref: 1063, sistem: null, toplu_birlestirme_yapildi: null, gercek_adi: 'GELİŞİM DAYANIKLI TÜKETYM MALLARI PAZARI', sayisallastirma_kisiler_ref: null, tuzel_kisi_sabit_id: null, kayit_tarihi: null, ilce_ref: null, referans: null, valilik_iznine_tabi_mi: null, kanuna_tabi_mi: null, mersis_no: null },
        { id: 10, tuzel_kisi_tip_ref: 88, adi: 'TÜRKİYE EMLAK KREDİ BANKASI T.A.O.', vergi_no: null, sicil_no: null, yabanci_temsilci_mi: 2, yabanci_sermayeli_mi: 2, ulke_ref: null, il_ref: null, faal_mi: 1, kapanis_tarihi: null, aciklama: '', tuzel_kisi_tip_adi: 'Kamu Bankaları', aktif_mi: 2, aktarildigi_tuzel_kisi_ref: 181, sistem: null, toplu_birlestirme_yapildi: null, gercek_adi: 'T.EMLAK KREDİ BANKASI A.O.', sayisallastirma_kisiler_ref: null, tuzel_kisi_sabit_id: null, kayit_tarihi: null, ilce_ref: null, referans: null, valilik_iznine_tabi_mi: null, kanuna_tabi_mi: null, mersis_no: null },
        { id: 11, tuzel_kisi_tip_ref: 83, adi: 'FİNANSBANK A.Ş.', vergi_no: '3880023334', sicil_no: '237525/185092', yabanci_temsilci_mi: 2, yabanci_sermayeli_mi: 2, ulke_ref: 210, il_ref: null, faal_mi: 1, kapanis_tarihi: null, aciklama: 'EMEK ŞUBESİ ANKARA', tuzel_kisi_tip_adi: 'Özel Bankalar', aktif_mi: 1, aktarildigi_tuzel_kisi_ref: null, sistem: null, toplu_birlestirme_yapildi: null, gercek_adi: 'FİNANSBANK A.Ş.', sayisallastirma_kisiler_ref: null, tuzel_kisi_sabit_id: 1816, kayit_tarihi: null, ilce_ref: null, referans: null, valilik_iznine_tabi_mi: null, kanuna_tabi_mi: null, mersis_no: null },
        { id: 12, tuzel_kisi_tip_ref: 88, adi: 'TÜRKİYE EMLAK KREDİ BANKASI A.Ş.(KONUTBANK)', vergi_no: null, sicil_no: null, yabanci_temsilci_mi: 2, yabanci_sermayeli_mi: 2, ulke_ref: null, il_ref: null, faal_mi: 1, kapanis_tarihi: null, aciklama: '', tuzel_kisi_tip_adi: 'Kamu Bankaları', aktif_mi: 2, aktarildigi_tuzel_kisi_ref: 181, sistem: null, toplu_birlestirme_yapildi: null, gercek_adi: 'T.EMLAK KREDİ BANKASI', sayisallastirma_kisiler_ref: null, tuzel_kisi_sabit_id: null, kayit_tarihi: null, ilce_ref: null, referans: null, valilik_iznine_tabi_mi: null, kanuna_tabi_mi: null, mersis_no: null },
        { id: 15, tuzel_kisi_tip_ref: 168, adi: 'ANKARA 13.İCRA MÜDÜRLÜĞÜ', vergi_no: null, sicil_no: null, yabanci_temsilci_mi: 2, yabanci_sermayeli_mi: 2, ulke_ref: null, il_ref: null, faal_mi: 1, kapanis_tarihi: null, aciklama: '', tuzel_kisi_tip_adi: 'İcra Dairesi', aktif_mi: 2, aktarildigi_tuzel_kisi_ref: 2862, sistem: null, toplu_birlestirme_yapildi: null, gercek_adi: 'ANKARA 13.İCRA MÜDÜRLÜĞÜ', sayisallastirma_kisiler_ref: null, tuzel_kisi_sabit_id: null, kayit_tarihi: null, ilce_ref: null, referans: null, valilik_iznine_tabi_mi: null, kanuna_tabi_mi: null, mersis_no: null },
        { id: 16, tuzel_kisi_tip_ref: 168, adi: 'ANKARA 19.İCRA MÜDÜRLÜĞÜ', vergi_no: null, sicil_no: null, yabanci_temsilci_mi: 2, yabanci_sermayeli_mi: 2, ulke_ref: null, il_ref: null, faal_mi: 1, kapanis_tarihi: null, aciklama: '', tuzel_kisi_tip_adi: 'İcra Dairesi', aktif_mi: 2, aktarildigi_tuzel_kisi_ref: 10247, sistem: null, toplu_birlestirme_yapildi: null, gercek_adi: 'ANKARA 19.İCRA MÜDÜRLÜĞÜ', sayisallastirma_kisiler_ref: null, tuzel_kisi_sabit_id: null, kayit_tarihi: null, ilce_ref: null, referans: null, valilik_iznine_tabi_mi: null, kanuna_tabi_mi: null, mersis_no: null },
        { id: 26, tuzel_kisi_tip_ref: 18, adi: 'ÇANKAYA BELEDİYESİ', vergi_no: '2290029238', sicil_no: '', yabanci_temsilci_mi: 2, yabanci_sermayeli_mi: 2, ulke_ref: 210, il_ref: 28, faal_mi: 1, kapanis_tarihi: null, aciklama: '', tuzel_kisi_tip_adi: null, aktif_mi: 1, aktarildigi_tuzel_kisi_ref: null, sistem: null, toplu_birlestirme_yapildi: null, gercek_adi: 'ÇANKAYA BELEDİYESİ', sayisallastirma_kisiler_ref: null, tuzel_kisi_sabit_id: 1996, kayit_tarihi: '2012-05-31 13:50:42.450', ilce_ref: 165, referans: null, valilik_iznine_tabi_mi: null, kanuna_tabi_mi: null, mersis_no: null },
        { id: 31, tuzel_kisi_tip_ref: 88, adi: 'TÜRKİYE HALK BANKASI A.Ş.', vergi_no: '4560004685', sicil_no: '1070', yabanci_temsilci_mi: 2, yabanci_sermayeli_mi: 2, ulke_ref: null, il_ref: null, faal_mi: 1, kapanis_tarihi: null, aciklama: '', tuzel_kisi_tip_adi: 'Kamu Bankaları', aktif_mi: 1, aktarildigi_tuzel_kisi_ref: null, sistem: null, toplu_birlestirme_yapildi: null, gercek_adi: 'TÜRKİYE HALK BANKASI A.Ş.', sayisallastirma_kisiler_ref: null, tuzel_kisi_sabit_id: 1809, kayit_tarihi: null, ilce_ref: null, referans: null, valilik_iznine_tabi_mi: null, kanuna_tabi_mi: null, mersis_no: '0456000468500132' },
        { id: 38, tuzel_kisi_tip_ref: 83, adi: 'YAPI VE KREDİ BANKASI A.Ş.', vergi_no: '9370020892', sicil_no: '32736/016978', yabanci_temsilci_mi: 2, yabanci_sermayeli_mi: 2, ulke_ref: null, il_ref: null, faal_mi: 1, kapanis_tarihi: null, aciklama: '', tuzel_kisi_tip_adi: 'Özel Bankalar', aktif_mi: 1, aktarildigi_tuzel_kisi_ref: null, sistem: null, toplu_birlestirme_yapildi: null, gercek_adi: 'YAPI VE KREDİ BANKASI A.Ş.', sayisallastirma_kisiler_ref: null, tuzel_kisi_sabit_id: 1827, kayit_tarihi: null, ilce_ref: null, referans: null, valilik_iznine_tabi_mi: null, kanuna_tabi_mi: null, mersis_no: '0937002089200741' }
    ]
};

// Tüm tüzel kişileri getir
function tumTuzelKisileriGetir() {
    return tuzelKisiVeritabani.tuzel_kisiler;
}

// İsme göre tüzel kişi ara
function tuzelKisiAra(adi) {
    const aramaTermi = adi.toUpperCase();
    return tuzelKisiVeritabani.tuzel_kisiler.filter(t =>
        t.adi.toUpperCase().includes(aramaTermi) ||
        t.gercek_adi.toUpperCase().includes(aramaTermi)
    );
}

// Vergi noya göre tüzel kişi ara
function vergiNoIleTuzelKisiAra(vergiNo) {
    return tuzelKisiVeritabani.tuzel_kisiler.filter(t => t.vergi_no === vergiNo);
}

// Modül olarak export et
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        tumTuzelKisileriGetir,
        tuzelKisiAra,
        vergiNoIleTuzelKisiAra
    };
}
