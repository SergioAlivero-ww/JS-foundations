const owoce = ["jabłko", "gruszka"];
const owoce2 = [...owoce, "śliwka"];
/* ["jabłko", "gruszka", sliwka""] */
console.log(owoce2);
console.log(owoce);

const auto = { marka: "Toyota", rok: 2018 };
const auto2 = { ...auto, kolor: "czarny"};
console.log(auto);
console.log(auto2);

const twojaStara = {twoja: "pierdoli głupoty",};
const mojaStara = {...twojaStara, moja: "gada mądrze"};
console.log(mojaStara);

let liczby = [1, 2, 4, 5, 32,1023,11,3];
function policz(...liczby){
    const suma = liczby.reduce((kula, x) => {
        return kula + x;
    }, 0);
    console.log(suma);
}
const nums = [1,4,32222,442,2312,34];
policz(...liczby);
policz(1,2,3,4,5,5,53,3,)
policz(...nums);


const { imie, ...dane } = { imie: "Serhii", wiek: 30, miasto: "Gdańsk" };
console.log(imie);   // ?
console.log(dane);  

function stworzKoszyk(){
    let koszyk = [];
    return {
        dodaj: function(prod){
            const produkt = prod;
            koszyk = [...koszyk, produkt];
            return koszyk;
        },
        pokaz: function(){
            return koszyk;
        }
    }
}
const koszyk = stworzKoszyk();
koszyk.dodaj("mleko");
koszyk.dodaj("chleb");
console.log(koszyk.pokaz());  // ?

const grupy = [[1, 2], [3, 4], [5, 6]];
const plasko = grupy.reduce((kula, x) => {
    return kula = [...kula, ...x];
}, []);
console.log(plasko);

const zwierzeta = [
  { typ: "kot", imie: "Mruczek" },
  { typ: "pies", imie: "Rex" },
  { typ: "kot", imie: "Filemon" }
];

const kats = zwierzeta.reduce((kula, x) => {
    kula[x.typ] = [...(kula[x.typ] || []), x.imie];
    return kula;
}, {});
console.log(kats);

/* MOCNA PRACA */

function stworzMagazyn(){
    let towary = [];
    return {
        dodaj: function(nazwa, ilosc){
            const towar = {nazwa, ilosc};
            towary = [...towary, towar];
            return towary;
        },
        pokaz: function(){
            return towary;
        },
        lacznaIlosc: function(){
            return towary.reduce((kula, x) => {
                return kula + x.ilosc;
            }, 0);
        }
    }
}
const mag = stworzMagazyn();
mag.dodaj("śruby", 100);
mag.dodaj("nakrętki", 250);
mag.dodaj("podkładki", 50);
console.log(mag.pokaz());        // ?
console.log(mag.lacznaIlosc());  // ?

function stworzListe(){
    let zadania = [];
    return {
        dodaj: function(id, text){
            const zadanie = {id, text};
            zadania = [...zadania, zadanie];
            return zadania;
        },
        usun: function(id){
            zadania = zadania.filter((z) => z.id !== id);
            return zadania;
        },
        znajdz: function(id){
            return zadania.find((z) => z.id === id);
        },
        pokaz: function(){
            return zadania;
        }
    }
}
const lista = stworzListe();
lista.dodaj(1, "kupić mleko");
lista.dodaj(2, "zadzwonić do mamy");
lista.dodaj(3, "trening");
lista.usun(2);
console.log(lista.pokaz());     // ?
console.log(lista.znajdz(3));   // ?

function stworzSklep(){
    let produkty = [];
    return {
        dodaj: function(nazwa, cena, kategoria){
           const nowyProdukt = {nazwa, cena, kategoria};
           produkty = [...produkty, nowyProdukt];
           return produkty;
        },
        wartoscMagazynu: function(){
            return produkty.reduce((kula, x) => 
                kula + x.cena, 0)
        },
        zKategorii: function(kat){
            return produkty.filter((p) => 
                p.kategoria === kat
            )
        },
        najdrozszy: function(){
            return produkty.reduce((kula, x) => {
                if(kula.cena < x.cena){
                    return x;
                } else {
                    return kula;
                }
            })
        }
    }
}

const sklep = stworzSklep();
sklep.dodaj("laptop", 3000, "elektronika");
sklep.dodaj("mysz", 80, "elektronika");
sklep.dodaj("biurko", 500, "meble");
console.log(sklep.wartoscMagazynu());   // ?
console.log(sklep.zKategorii("elektronika"));  // ?
console.log(sklep.najdrozszy());        // ?

function stworzGre(){
    let gracze = [];
    return {
        dodaj: function(nick, punkty){
            const gracz1 = {nick, punkty};
            gracze = [...gracze, gracz1];
            return gracze;
        },
        dodajPunkty: function(nick, ile){
            gracze = gracze.map((g) => {
                if(g.nick === nick){
                    return { ...g, punkty: g.punkty + ile };;
                } else {
                    return g;
                };
            })
        },
        najlepszy: function(){
            return gracze.reduce((kula, x) => {
                if(kula.punkty < x.punkty){
                    return x;
                } else {
                    return kula;
                }
            })
        },
        pokaz: function(){
            return gracze;
        }
    }
}

const gra = stworzGre();
gra.dodaj("serhii", 0);
gra.dodaj("ania", 0);
gra.dodajPunkty("serhii", 50);
gra.dodajPunkty("ania", 30);
gra.dodajPunkty("serhii", 20);
console.log(gra.pokaz());      // ?
console.log(gra.najlepszy());  // ?