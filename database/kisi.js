// TAKBİS Kişi Veritabanı Modülü

const kisiVeritabani = {
    kisiler: [
        {
            kisi_sistem_no: '123456',
            tc_kimlik_no: '23666443662',
            vergi_no: '',
            soyadi: 'ALPAR',
            adi: 'ERDEM',
            bir_onceki_soyadi: '',
            baba_adi: 'ALİ',
            ana_adi: 'İNCİ',
            dogum_yeri: 'ULA',
            dogum_tarihi: '14/01/1984',
            dogum_tarihi_baslangic: '14/01/1981',
            dogum_tarihi_bitis: '14/01/1984',
            il: 'MUĞLA',
            ilce: 'ULA',
            mahalle_koy: 'MERKEZ',
            cilt_no: '125',
            aile_sira_no: '45',
            sira_no: '12',
            uyruk: 'TÜRKİYE',
            cinsiyet: 'ERKEK',
            vatandaslik_tip: 'T.C. VATANDAŞI',
            engel_tip: '',
            islem_sistem_no: ''
        },
        {
            kisi_sistem_no: '1234567',
            tc_kimlik_no: '20546070340',
            vergi_no: '',
            soyadi: 'ALPAR',
            adi: 'DERYA',
            bir_onceki_soyadi: '',
            baba_adi: 'ALİİHSAN',
            ana_adi: 'HANİFE İNCİ',
            dogum_yeri: 'ULA',
            dogum_tarihi: '14/01/1985',
            dogum_tarihi_baslangic: '14/01/1981',
            dogum_tarihi_bitis: '14/01/1981',
            il: 'MUĞLA',
            ilce: 'ULA',
            mahalle_koy: 'MERKEZ',
            cilt_no: '125',
            aile_sira_no: '45',
            sira_no: '12',
            uyruk: 'TÜRKİYE',
            cinsiyet: 'KADIN',
            vatandaslik_tip: 'T.C. VATANDAŞI',
            engel_tip: '',
            islem_sistem_no: ''
        },
        {
            kisi_sistem_no: '88990011',
            tc_kimlik_no: '11122233344',
            vergi_no: '1234567890',
            soyadi: 'YILMAZ',
            adi: 'MEHMET',
            bir_onceki_soyadi: '',
            baba_adi: 'ALİ',
            ana_adi: 'AYŞE',
            dogum_yeri: 'ANKARA',
            dogum_tarihi: '05/03/1975',
            dogum_tarihi_baslangic: '05/03/1975',
            dogum_tarihi_bitis: '05/03/1975',
            il: 'ANKARA',
            ilce: 'ÇANKAYA',
            mahalle_koy: 'BAHÇELIEVLER',
            cilt_no: '89',
            aile_sira_no: '23',
            sira_no: '7',
            uyruk: 'TÜRKİYE',
            cinsiyet: 'ERKEK',
            vatandaslik_tip: 'T.C. VATANDAŞI',
            engel_tip: '',
            islem_sistem_no: ''
        },
        {
            kisi_sistem_no: '55667788',
            tc_kimlik_no: '98765432109',
            vergi_no: '',
            soyadi: 'KAYA',
            adi: 'FATİH',
            bir_onceki_soyadi: '',
            baba_adi: 'MUSTAFA',
            ana_adi: 'ZEYNEP',
            dogum_yeri: 'İSTANBUL',
            dogum_tarihi: '12/08/1990',
            dogum_tarihi_baslangic: '12/08/1990',
            dogum_tarihi_bitis: '12/08/1990',
            il: 'İSTANBUL',
            ilce: 'KADIKÖY',
            mahalle_koy: 'GÖZTEPE',
            cilt_no: '456',
            aile_sira_no: '78',
            sira_no: '34',
            uyruk: 'TÜRKİYE',
            cinsiyet: 'ERKEK',
            vatandaslik_tip: 'T.C. VATANDAŞI',
            engel_tip: '',
            islem_sistem_no: ''
        }
    ]
};

// Kişi sistem numarasına göre sorgulama
function kisiSistemNoIleSorgula(sistemNo) {
    return kisiVeritabani.kisiler.filter(kisi =>
        kisi.kisi_sistem_no === sistemNo
    );
}

// TC Kimlik numarasına göre sorgulama
function tcKimlikNoIleSorgula(tcNo) {
    return kisiVeritabani.kisiler.filter(kisi =>
        kisi.tc_kimlik_no === tcNo
    );
}

// Detaylı arama
function detayliArama(kriterler) {
    return kisiVeritabani.kisiler.filter(kisi => {
        let eslesme = true;

        if (kriterler.soyadi && !kisi.soyadi.toUpperCase().includes(kriterler.soyadi.toUpperCase())) {
            eslesme = false;
        }
        if (kriterler.adi && !kisi.adi.toUpperCase().includes(kriterler.adi.toUpperCase())) {
            eslesme = false;
        }
        if (kriterler.baba_adi && !kisi.baba_adi.toUpperCase().includes(kriterler.baba_adi.toUpperCase())) {
            eslesme = false;
        }
        if (kriterler.ana_adi && !kisi.ana_adi.toUpperCase().includes(kriterler.ana_adi.toUpperCase())) {
            eslesme = false;
        }
        if (kriterler.dogum_yeri && !kisi.dogum_yeri.toUpperCase().includes(kriterler.dogum_yeri.toUpperCase())) {
            eslesme = false;
        }

        return eslesme;
    });
}

// Tüm kişileri getir
function tumKisileriGetir() {
    return kisiVeritabani.kisiler;
}

// Modül olarak export et
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        kisiSistemNoIleSorgula,
        tcKimlikNoIleSorgula,
        detayliArama,
        tumKisileriGetir
    };
}
