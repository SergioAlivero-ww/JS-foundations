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