// TAKBİS Yabancı Kişi Veritabanı Modülü

const yabanciKisiVeritabani = {
    yabanci_kisiler: [
        {
            id: 1,
            il: 'ANKARA',
            kurum: 'TAPU VE KADASTRO GENEL MÜDÜRLÜĞÜ',
            yabanci_kimlik_no: '99654479812',
            adi: 'CHRISTIANE',
            soyadi: 'LALLIER',
            baba_adi: 'JEAN LOUIS',
            ana_adi: 'KIZI',
            dogum_tarihi: '16/07/1947',
            dogum_yeri_aciklama: 'THETFORD-MINES CAN',
            dogum_yeri: 'Kanada',
            dogum_uyruk: 'Kanada',
            kisi_uyruk: 'Kanada',
            cinsiyet: 'Kadın',
            medeni_hal: 'Dul',
            ikamet_ettigi_il: 'NİĞDE',
            gigm_referans_no: '',
            baslangic_tarihi: '20/05/2015',
            bitis_tarihi: '',
            bitis_nedeni: 'Süresiz',
            dosya_no: '6080674067',
            izin_no: '6080674067',
            talep_sorgulama_no: 'A12EBD80-79B4-421B-BE12-F12D0C4709DC',
            talep_durumu: 'Olumlu',
            guncelleme_durumu: '',
            aciklama: 'TalepGuid Göç Net sisteminden dönmediğinden Tsuy Sistemi Tarafından oluşturulmuştur. Göç Net Sisteminden Talep Gui ile Sorgulamada kullanılmaz.'
        }
    ]
};

// Tüm yabancı kişileri getir
function tumYabanciKisileriGetir() {
    return yabanciKisiVeritabani.yabanci_kisiler;
}

// Kimlik no ile ara
function yabanciKimlikNoIleAra(no) {
    return yabanciKisiVeritabani.yabanci_kisiler.filter(k => k.yabanci_kimlik_no === no);
}

// Modül olarak export et
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        tumYabanciKisileriGetir,
        yabanciKimlikNoIleAra
    };
}
