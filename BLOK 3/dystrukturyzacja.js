/* 1 */
const auto = { marka: "Toyota", rok: 2018, koolor: "czarny" };
const { marka, rok } = auto;
/* 2 */
const ksiazka = { tytul: "Wiedzmin", autor: "Sapkowski", strony: 320 };
function opisz(k){
    const { tytul, autor } = k;
    console.log( tytul + " - " + autor);
}
opisz(ksiazka);
/* 3 */

console.log(marka);

const { predkosc } = auto;
console.log(predkosc);

const produkt = { nazwa: "Kawa", cena: 15 };
const { nazwa, cena, rabat = 0} = produkt;
console.log(nazwa);
console.log(cena);
console.log(rabat);

const produkt2 = { nazwa: "Herbata", cena2: 0 };
const { cena2 = 99 } = produkt2;
console.log(cena2);

const kolory = ["czerwony", "zielony", "niebieski"];
const [glowny, dodatkowy] = kolory;
console.log(glowny);
console.log(dodatkowy);