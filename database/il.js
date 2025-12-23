// TAKBİS İl Veritabanı Modülü

const ilVeritabani = {
    iller: [
        {
            id: 28,
            adi: 'ANKARA',
            kisa_adi: 'ANKARA',
            bolge_ref: 1,
            trafik_kod: '06',
            baslangic_tarih: '1900-01-01',
            bitis_tarih: '3000-01-01',
            aktif: true,
            kiyi_sinir_ili: false,
            sinir_ili: false,
            baskent: false,
            yabanci_temsilcilik_acilir: false,
            kadastro_il_ref: 81,
            yerlesim_kod: '37,138'
        }
    ]
};

// Tüm illeri getir
function tumIlleriGetir() {
    return ilVeritabani.iller;
}

// İsme göre il ara
function ilAra(ilAdi) {
    return ilVeritabani.iller.filter(il =>
        il.adi.toUpperCase().includes(ilAdi.toUpperCase())
    );
}

// Trafik koduna göre il bul
function ilTrafikKodaGoreBul(trafikKod) {
    return ilVeritabani.iller.find(il => il.trafik_kod === trafikKod);
}
