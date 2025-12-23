// TAKBİS Bağımsız Bölüm Cins Veritabanı Modülü

const bagimsizBolumCinsVeritabani = {
    bagimsiz_bolum_cinsler: [
        // KONUT örnekleri
        { id: 87506885, zemin_ref: 20418437, tasinmaz_cins_ref: 39000000000001, tesis_islem_ref: 88976038, terkin_islem_ref: null, tapu_bolum_durum: 2, tasinmaz_cins_aciklama: 'KONUT', sistem: null, sayisallastirma_sayfa_ref: null, nitelik_ref: null, belkis_degistirdi: 2 },
        { id: 87506886, zemin_ref: 20418438, tasinmaz_cins_ref: 39000000000001, tesis_islem_ref: 88976038, terkin_islem_ref: null, tapu_bolum_durum: 2, tasinmaz_cins_aciklama: 'KONUT', sistem: null, sayisallastirma_sayfa_ref: null, nitelik_ref: null, belkis_degistirdi: 2 },
        { id: 87506888, zemin_ref: 20418439, tasinmaz_cins_ref: 39000000000001, tesis_islem_ref: 88976038, terkin_islem_ref: null, tapu_bolum_durum: 2, tasinmaz_cins_aciklama: 'KONUT', sistem: null, sayisallastirma_sayfa_ref: null, nitelik_ref: null, belkis_degistirdi: 2 },

        // TİCARET örnekleri
        { id: 87506905, zemin_ref: 20418453, tasinmaz_cins_ref: 19000000000001, tesis_islem_ref: 88976038, terkin_islem_ref: null, tapu_bolum_durum: 2, tasinmaz_cins_aciklama: 'TİCARET', sistem: null, sayisallastirma_sayfa_ref: null, nitelik_ref: null, belkis_degistirdi: 2 },
        { id: 87506982, zemin_ref: 44461449, tasinmaz_cins_ref: 19000000000001, tesis_islem_ref: 88976038, terkin_islem_ref: null, tapu_bolum_durum: 2, tasinmaz_cins_aciklama: 'TİCARET', sistem: null, sayisallastirma_sayfa_ref: null, nitelik_ref: null, belkis_degistirdi: 2 },

        // DÜKKAN örnekleri
        { id: 87506907, zemin_ref: 20418454, tasinmaz_cins_ref: 2000000001, tesis_islem_ref: 88976038, terkin_islem_ref: null, tapu_bolum_durum: 2, tasinmaz_cins_aciklama: '-Dükkan', sistem: null, sayisallastirma_sayfa_ref: null, nitelik_ref: null, belkis_degistirdi: 2 },
        { id: 87506908, zemin_ref: 20418455, tasinmaz_cins_ref: 2000000001, tesis_islem_ref: 88976038, terkin_islem_ref: null, tapu_bolum_durum: 2, tasinmaz_cins_aciklama: '-Dükkan', sistem: null, sayisallastirma_sayfa_ref: null, nitelik_ref: null, belkis_degistirdi: 2 },
        { id: 87506980, zemin_ref: 20418563, tasinmaz_cins_ref: 2000000001, tesis_islem_ref: 88976038, terkin_islem_ref: null, tapu_bolum_durum: 2, tasinmaz_cins_aciklama: 'DÜKKAN', sistem: null, sayisallastirma_sayfa_ref: null, nitelik_ref: null, belkis_degistirdi: 2 },
        { id: 87506981, zemin_ref: 20418564, tasinmaz_cins_ref: 2000000001, tesis_islem_ref: 88976038, terkin_islem_ref: null, tapu_bolum_durum: 2, tasinmaz_cins_aciklama: 'DÜKKAN', sistem: null, sayisallastirma_sayfa_ref: null, nitelik_ref: null, belkis_degistirdi: 2 },

        // MESKEN örnekleri (Diğer bina)
        { id: 112122847, zemin_ref: 1664091, tasinmaz_cins_ref: 18000000000001, tesis_islem_ref: 156440631, terkin_islem_ref: null, tapu_bolum_durum: 2, tasinmaz_cins_aciklama: 'Mesken', sistem: null, sayisallastirma_sayfa_ref: null, nitelik_ref: null, belkis_degistirdi: 2 },
        { id: 112122851, zemin_ref: 1664457, tasinmaz_cins_ref: 18000000000001, tesis_islem_ref: 156440631, terkin_islem_ref: null, tapu_bolum_durum: 2, tasinmaz_cins_aciklama: 'Mesken', sistem: null, sayisallastirma_sayfa_ref: null, nitelik_ref: null, belkis_degistirdi: 2 },

        // Dükkan (Diğer bina)
        { id: 112122848, zemin_ref: 1664092, tasinmaz_cins_ref: 2000000001, tesis_islem_ref: 156440631, terkin_islem_ref: null, tapu_bolum_durum: 2, tasinmaz_cins_aciklama: 'Dükkan', sistem: null, sayisallastirma_sayfa_ref: null, nitelik_ref: null, belkis_degistirdi: 2 },
        { id: 112122862, zemin_ref: 1664468, tasinmaz_cins_ref: 2000000001, tesis_islem_ref: 156440631, terkin_islem_ref: null, tapu_bolum_durum: 2, tasinmaz_cins_aciklama: 'Dükkan', sistem: null, sayisallastirma_sayfa_ref: null, nitelik_ref: null, belkis_degistirdi: 2 }
    ]
};

// Tüm bağımsız bölüm cinslerini getir
function tumBagimsizBolumCinsleriniGetir() {
    return bagimsizBolumCinsVeritabani.bagimsiz_bolum_cinsler;
}

// Zemine göre cins getir
function zemineGoreBagimsizBolumCinsGetir(zeminRef) {
    return bagimsizBolumCinsVeritabani.bagimsiz_bolum_cinsler.filter(bbc => bbc.zemin_ref === zeminRef);
}

// Taşınmaz cinsine göre getir
function tasinmazCinsineGoreBagimsizBolumGetir(tasinmazCinsRef) {
    return bagimsizBolumCinsVeritabani.bagimsiz_bolum_cinsler.filter(bbc => bbc.tasinmaz_cins_ref === tasinmazCinsRef);
}

// Bağımsız Bölüm Cins ID'ye göre bul
function bagimsizBolumCinsIDBul(bagimsizBolumCinsId) {
    return bagimsizBolumCinsVeritabani.bagimsiz_bolum_cinsler.find(bbc => bbc.id === bagimsizBolumCinsId);
}
