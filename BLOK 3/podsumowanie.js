const transakcje = [
  { typ: "przychód", kwota: 1000 },
  { typ: "wydatek", kwota: 300 },
  { typ: "przychód", kwota: 500 },
  { typ: "wydatek", kwota: 200 }
];

const poukladane = transakcje.reduce((kula, x) => {
    kula[x.typ] = (kula[x.typ] || 0) + x.kwota;
    return kula;
}, {});
console.log(poukladane);

function stworzNotatnik(){
    let notatki = [];
    return {
        dodaj: function(tekst){
            const notatka = tekst;
            notatki = [...notatki, notatka];
            return notatki;
        },
        pokaz: function(){
            return notatki;
        }
    }
}
const test = stworzNotatnik();
test.dodaj("Twoja stara");
console.log(test.pokaz());

const osoba = { imie: "Serhii", miasto: "Gdańsk" };
const {imie, miasto} = osoba;
console.log(`${imie} mieszka w ${miasto}` );

function stworzZespol(){
    let osoby = [];
    return {
        dodaj: function(imie, pensja){
            const osoba = {imie, pensja};
            osoby = [...osoby, osoba];
            return osoby;
        },
        podwyzka: function(imie, ile){
            osoby = osoby.map((o) => {
                if(imie === o.imie){
                    return {...o, pensja: o.pensja + ile};
                } else {
                    return o;
                }
            })
        },
        sumaPensji: function(){
            const suma = osoby.reduce((kula, x) => {
               return kula + x.pensja;
            }, 0);
            return suma;
        },
        powyzej: function(kwota){
            const rich = osoby.filter((o) => {
               return o.pensja >= kwota;
            })
            return rich;
        },
        pokaz: function(){
            return osoby;
        }
    }
}
const dzial1 = stworzZespol();
dzial1.dodaj("serhii", 5000);
dzial1.dodaj("Gosia", 10000);
dzial1.dodaj("jakub", 100);
console.log(dzial1.pokaz());
dzial1.podwyzka("jakub", 2000);

console.log(dzial1.pokaz());
console.log(dzial1.sumaPensji());     // powinno 17100
console.log(dzial1.powyzej(4000));    // serhii i Gosia


function stworzPlayliste() {
    let playlista = [];
    return {
        dodaj: function(tytul, dlugosc){
            const utwor = {tytul, dlugosc};
            playlista = [...playlista, utwor];
            return playlista;
        },
        lacznyCzas: function(){
            const czas = playlista.reduce((kula, x)=>{
                kula = kula + x.dlugosc;
                return kula;
            }, 0);
            return czas;
        },
        dluzsze: function(sekundy){
            const filtered = playlista.filter((p) => {
               return p.dlugosc >= sekundy;
            });
            return filtered;
        },
        tytuly: function(){
            return playlista.map((p) => {
                return p.tytul;
            });
        },
        pokaz: function(){
            return playlista;
        }
    }
}

const pierwszy = stworzPlayliste();
pierwszy.dodaj("Ariana grande", 224);
pierwszy.dodaj("Ariana grande", 334);
pierwszy.dodaj("kaney west", 334);
console.log(pierwszy.pokaz());
console.log(pierwszy.lacznyCzas());
console.log(pierwszy.dluzsze(250));
console.log(pierwszy.tytuly());
