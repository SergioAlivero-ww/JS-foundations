const osoba = {
    imie: "Ania",
    przywitaj: function() {
        console.log("Cześć, jestem " + this.imie);
    }
};

const funkcja = osoba.przywitaj;   // wyciągamy metodę do osobnej zmiennej
funkcja();                          // i wywołujemy ją "samą"

const user = {
    imie: "Serhii",
    punkty: 0,
    dodajPunkt: function() {
        user.punkty = user.punkty + 1;
        console.log(user.imie + " ma teraz " + user.punkty + " punkt.")
    }
};

user.dodajPunkt();
user.dodajPunkt();

const user2 = {
    imie: "Ania",
    punkty: 0,
    dodajPunkt: function() {
        user2.punkty = user2.punkty + 1;                          // ← skopiowane z user
        console.log(user2.imie + " ma teraz " + user2.punkty + " punkt.");   // ← skopiowane
    }
};

user2.dodajPunkt();


const user3 = {
    imie: "Serhii",
    punkty: 0,
    dodajPunkt: function() {
        this.punkty = this.punkty + 1;                              // this zamiast user
        console.log(this.imie + " ma teraz " + this.punkty + " punkt.");
    }
};

const user4 = {
    imie: "Ania",
    punkty: 0,
    dodajPunkt: function() {
        this.punkty = this.punkty + 1;                              // IDENTYCZNY kod!
        console.log(this.imie + " ma teraz " + this.punkty + " punkt.");
    }
};

user3.dodajPunkt();
user4.dodajPunkt();


const konto = {
    wlasciciel: "Serhii Likhachov",
    saldo: 100,
    wplac: function() {
        this.saldo = this.saldo + 50;
        console.log(this.wlasciciel + " ma nowe saldo: " + this.saldo);
    }
};
konto.wplac();
konto.wplac();

const post = {
    tytul: "kawiarnia",
    lajki: 0,
    polub: function() {
        this.lajki = this.lajki + 1;
        console.log(this.tytul + " ma teraz " + this.lajki + " polubień.");
    }
};
post.polub();
post.polub();


const post2 = {
    tytul: "kotki",
    lajki: 0,
    polub: function() {
        this.lajki = this.lajki + 1;
        console.log(this.tytul + " ma teraz " + this.lajki + " polubień.");
    }
};
post2.polub();
post2.polub();

const koszyk = {
    produkty: [],
    dodaj: function(x){
        this.produkty.push(x);
        console.log("Twój koszyk zawiera: " + this.produkty)
    }
};
koszyk.dodaj("kawa");
koszyk.dodaj("Kubek");

const test = {
    nazwa: "Test",
    metoda1: () => { console.log(this.nazwa); },
    metoda2: function() {
        const wewnetrzna = () => { console.log(this.nazwa); };
        wewnetrzna();
    }
};
test.metoda1();
test.metoda2();