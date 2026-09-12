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


const user = ["serhii", "Gdańsk"];

const [imie, ,  wiek = 18] = user;
console.log(imie);
console.log(wiek);


const config = { szerokość: 800 }
const { szerokość: w, wysokość: h = 600 } = config;
console.log("wysokośc to " + w + ", szerokość to " + h);

const obj = { a: 1 };
/* console.log(b); */ /* cannot access variable "b" before initialization */
const { b = 5 } = obj;
console.log(b); /* 5 */

const punkty = [10, undefined, 30];
const [x = 1, y = 2, z = 3, q = 4] = punkty;
console.log(y);
/* undefined zostanie. 
po za tym:
x = 10
y = 2
z = 30
q = 4 */

const auto1 = { marka1: "Nisan", rok1: "1998"};
const {marka1, rok1} = auto1; 
console.log(marka1);
console.log(rok1);

const dane = ["Ania", "Kraków", "PL"];
const [imie1, , kraj] = dane;
console.log(imie1);
console.log(kraj);

const produkt1 = { nazwa2: "Kawa"};
const {nazwa2, cena3 = 10} = produkt1;
console.log(nazwa2);
console.log(cena3);

const obj2 = {login: "serhii999"};
const {login: user1} = obj2;
console.log(user1);

const item = { price: 50 };
const {price: koszt = 0} = item;
console.log(koszt);