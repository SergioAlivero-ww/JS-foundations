let oryginalna = [1, 2, 3];
let kopia = oryginalna;   // "kopiujesz" do nowej zmiennej

kopia.push(4);

console.log(oryginalna);
console.log(kopia);

let gracz1 = {imie: "ania", punkty: 999};
let gracz2 = {...gracz1};
gracz2.punkty = 10;

console.log(gracz1);
console.log(gracz2);

let produkt = {nazwa: "Jeensy", cena: 3000};
let produktPoZnizce = {...produkt, cena: 1500};
console.log(produkt);
console.log(produktPoZnizce);
/* całośc produkt przepisuje się do produktPoZnizce tworzac niezalezną kopie, cena: 1500 nadpisuje cene 3000 niezleznie */

let owoce = ["jabko", "banan"];
let owoce2 = [...owoce];
owoce2.push("mandarynka");
console.log(owoce);
console.log(owoce2);
/* push wnosi zmiane tylko w owoce2 */

let warzywa = ["marchewka", "twoja stara"];
let zakupy = [...owoce2, ...warzywa];
console.log(zakupy);
/* wszytsko ładnie połączone */

function suma(a, b, c) {
    return a + b + c;
}
let liczby = [1, 2, 3];

const wynik = suma(...liczby);
console.log(wynik);

function pokazWszystkie(pierwszy, ...reszta) {
    console.log("pierwszy:", pierwszy);
    console.log("reszta:", reszta);
}

pokazWszystkie(1, 2, 3, 4, 5);

function pokazDrugi(drugi, pierwszy, ...reszta){
    console.log(drugi);
    console.log(pierwszy);
    console.log(reszta);
}
pokazDrugi(1, 2, 3, 4, 5, 6);

function suma1(...liczby){
    return liczby.reduce((kula, x) => kula + x, 0);
}
console.log(suma1(20, 5, 6, 2));

function najwieksza(...liczby){
    return liczby.reduce((lider, x) => x > lider ? x : lider);
}
console.log(najwieksza(1,2,3,4));


function polacz(separator, ...slowa){
    return slowa.join(separator);
}
const bb = polacz(", ", "jabka","babka","gigant");
console.log(bb);




