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