function stworzLicznik(){
  let liczba = 0;

  return function (){
    liczba = liczba + 1;
    return liczba;
  }
}
const a = stworzLicznik();
console.log(a());
a();
a();
console.log(a());
console.log(a);

function stworzLicznik2(){
  let liczba = 0;
  return function(){
    liczba = liczba + 1;
    console.log(liczba);
  }
}
const b = stworzLicznik2();
b();
b();

const ceny = [10, 30, 100, 150];
const sumaCen = ceny.reduce((kula, x) => {
  return kula + x;
}, 0);
console.log(sumaCen);

const wiek = [15, 22, 17, 30, 12, 40];
const pelnoletni = wiek.reduce((kula, x) => {
  if (x >= 18){
    return kula = kula + 1;
  } else {
    return kula
  }
}, 0);
console.log(pelnoletni);

const glosy = ["tak", "nie", "nie wiadomo", "tak", "nie"];
const podliczanie = glosy.reduce((kula, x) => {
  kula[x] = (kula[x] || 0) + 1;
  return kula;
}, {});
console.log(podliczanie);

const ruchy = [100, -50, 30, -20, 80];
const ruchy2 = ruchy.reduce((kula, x) => {
  if(x > 0){
    return kula + x;
  } else {
    return kula;
  }
}, 0);
console.log(ruchy2);

const wydatki = [
  { kat: "jedzenie", kwota: 50 },
  { kat: "transport", kwota: 20 },
  { kat: "jedzenie", kwota: 30 },
  { kat: "transport", kwota: 15 }
];

const wydatki2 = wydatki.reduce((kula, x) => {
  kula[x.kat] = (kula[x.kat] || 0) + x.kwota;
  return kula;
}, {});
console.log(wydatki2);

const liczby = [23, 8, 42, 15, 4];
const rekord = liczby.reduce((kula, x) => {
  if(kula < x){
   return kula = x;
  } else {
    return kula;
  }
}, 0);
console.log(rekord);

const kwoty = [20, 50, 30];
const suma1 = kwoty.reduce((kula, x) => {
  return kula + x;
}, 0);
console.log(suma1)

const zwierzeta = ["kot", "pies", "kot", "kot", "pies"];
const ileczego = zwierzeta.reduce((kula, x) => {
  kula[x] = (kula[x] || 0) + 1;
  return kula;
}, {})
console.log(ileczego);



function stworzLicznik3(){
  let liczba = 0;
  function dodaj(){
    liczba = liczba + 1;
    return liczba;
  }
  return dodaj;
}
const f = stworzLicznik3();
f();
f();
f();
console.log(f());

function stworzLicznik15(start){
  let liczba = start;
  function dodaj2(){
    liczba = liczba + 1;
    return liczba;
  }
  return dodaj2;
}

const licznik2 = stworzLicznik15(10);
console.log(licznik2());  // ? 
console.log(licznik2());  // ?

function steps(krok){
let liczba = 0;
function zwiekszenie(){
  liczba = liczba + krok;
  return liczba;
}
return zwiekszenie;
}

const co5 = steps(5);
console.log(co5());  // ? 5
console.log(co5());  // ? 10
console.log(co5());  // ? 15


function stworzKonto1(){
  let saldo = 0;
  return{
    wplac: function(kwota){
      saldo = saldo + kwota;
      return saldo;
    },
    stan: function(){
      return saldo;
    }
  }
}

const konto1 = stworzKonto1();
konto1.wplac(100);
konto1.wplac(50);
console.log(konto1.stan());  // ? 150

function stworzKonto2(){
  let saldo = 0;
  return {
    wplac: function(kwota){
      saldo = saldo + kwota;
      return saldo;
    },
    wyplac: function(kwota){
      saldo = saldo - kwota;
      return saldo;
    },
    stan: function(){
      return saldo;
    }
  }
}
const k = stworzKonto2();
k.wplac(200);
k.wyplac(50);
console.log(k.stan());  // ? 150

const a1 = stworzKonto2();
const b1 = stworzKonto2();
a1.wplac(100);
b1.wplac(500);
console.log(a1.stan());  // ? 100
console.log(b1.stan());  // ? 500


function stworzKonto3(){
  let saldo = 0;
  return {
    wplac: function(kwota){
      saldo = saldo + kwota;
      return saldo;
    },
    wyplac: function(kwota){
      if(kwota > saldo){
        return "brak środków";
      } else {
        saldo = saldo - kwota;
        return saldo;
      }
    },
    stan: function(){
      return saldo;
    }
  }
}
const k1 = stworzKonto3();
k1.wplac(100);
console.log(k1.wyplac(150));  // ? brak srodków
console.log(k1.wyplac(80));   // ? 20
console.log(k1.stan());       // ? 20




function stworzListe(){
  let lista = [];
  return {
    dodaj: function(e){
      const nowyElement = e;
      lista = [...lista, nowyElement];
      return lista;
    },
    pokaz: function(){
      return lista;
    }
  }
}

const lista = stworzListe();
lista.dodaj("mleko");
lista.dodaj("chleb");
console.log(lista.pokaz());  // ["mleko", "chleb"]


function stworzMnoznik(liczba1){
  let mnoznik = liczba1;
  return function(x){ return x * mnoznik }
}

const podwoj = stworzMnoznik(2);
const potroj = stworzMnoznik(3);
console.log(podwoj(10));  // 20
console.log(potroj(10));  // 30



function stworzJednorazowe(){
  let uzyte = false;
  function doSome(){
    if(uzyte){
      return "juz zrobione";
    } else {
      uzyte = true;
      return uzyte;
    }
  }
  return doSome;
}

const akcja = stworzJednorazowe();
console.log(akcja());  // true
console.log(akcja());  // juz zrobione
console.log(akcja());  // juz zrobione

const liczby1 = [10, -5, 20, -8, 15];
const suma10 = liczby1.reduce((kula, x) => {
  if (x > 0){
    return kula + x;
  } else {
    return kula;
  }
}, 0)
console.log(suma10);

const oceny = [5, 3, 5, 4, 3, 5];
const wystemp = oceny.reduce((kula, x) => {
  kula[x] = (kula[x] || 0) + 1;
  return kula;
}, {});
console.log(wystemp);

const sprzedaz = [
  { produkt: "kawa", ilosc: 3 },
  { produkt: "herbata", ilosc: 5 },
  { produkt: "kawa", ilosc: 2 }
];

const zsumowane = sprzedaz.reduce((kula, x) => {
  kula[x.produkt] = (kula[x.produkt] || 0) + x.ilosc
  return kula;
}, {});
console.log(zsumowane)

const slowa = ["kot", "parasol", "dom", "komputer", "as"];
const najdluzsze = slowa.reduce((kula, x) => {
  if (x.length > kula.length){
    return x;
  } else {
    return kula;
  }
}, "")
console.log(najdluzsze);

