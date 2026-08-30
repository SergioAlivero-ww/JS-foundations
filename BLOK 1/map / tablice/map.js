let liczby = [1, 2 ,3 ,4];
let podwojone = liczby.map(function(x){
    return x * 2;
});
console.log(podwojone);

let imiona = ["ana", "piotr", "kasia"];
const imionaHej = imiona.map(function(imie){
    return `cześć ${imie}`;
})
console.log(imionaHej);

let websites = ["Sony.com", "TVP.net"];
const tvp = websites.map(function(t){
    return `I love ${t}`;
}) 
console.log(tvp);

let numbers = [2, 4, 5, 7, 23, 543, 6, 65, 33, 6, 60, 90,];
const newNumbers = numbers.filter(function(x){
    return x % 6 === 0;
})
console.log(newNumbers);

let names = ["Jon", "Piter", "Rob"];
const jj = names.filter(function(j){
   return j.includes("J");
});
console.log(jj)

let nums = [1, 12, 25, 15, 2];
const x = nums.find(function(x){
    return x > 10;
})
console.log(x);

let liczby1 = [5, 12, 8, 130, 44];
const ogromna = liczby1.find(function(x) {
    return x > 1000;
});
console.log(ogromna);

let words = ["ticktack", "kiki", "brainrot"];
const wordsExtra = words.forEach(function(word){
    console.log("co oznacza słowo " + word + "?");
})

let wiek = [18, 25, 30, 16, 40];
const ktokolwiekNieletni = wiek.some(function(x) {
    return x < 18;
});
const wszyscyDorosli = wiek.every(function(x) {
    return x >= 18;
});
console.log("some (ktoś < 18?):", ktokolwiekNieletni);
console.log("every (wszyscy >= 18?):", wszyscyDorosli);


let temperatury = [12, 15, 8, 22, 19];
const atleastone = temperatury.some(function(x){
    return x > 20;
})
console.log("czy kest chociaz jeden dzień cieplejszy ni 20 stopni: " + atleastone);

let temperatury1 = [12, 15, 8, 22, 19];
const alldays = temperatury1.every(function(x){
    return x > 5;
})
console.log("czy wszystkie dni są cieplejsze ni 5 stopni: " + alldays);


let cars = ["Ford 2002", "dodge 2002", "BMW"];
const oldCars = cars.every(function(x){
    return x.includes("2002");
})
console.log("czy wszystkie auta są 2002 roku? - " + oldCars);

let cars1 = ["Dodge", "BMW", "Ferrarri"];
const carsPlus = cars1.map(function(x){
    return `${x}: to jest dobre, kurcze, autko`;
})
console.log(carsPlus);

let carsPlus1 = carsPlus.find(function(x){
   return x.includes("D");
})
console.log(carsPlus1)

let ceny = [10, 25, 40, 5];
const cenyVat = ceny.map(function(x){
    return x * 1.2;
})
console.log(cenyVat);

const cenyVat20 = cenyVat.filter(function(x){
    return x > 20;
})
console.log(cenyVat20);

let users = [
  { name: "Ana", age: 25 },
  { name: "Piotr", age: 17 },
  { name: "Kasia", age: 30 }
];

const userUnder18 = users.find(function(x){
    return x.age < 18;
})
console.log(userUnder18);

users.forEach(function(x){
    console.log(`${x.name}: ma ${x.age} lat`);
});

const user18 = users.some(function(x){
    return x.age < 18;
})
console.log(`czy wśród uzytkowników jest któś kto mam maniej ni 18 lat? ${user18}`);

const useR18 = users.every(function(x){
    return x.age > 18;
});
console.log(`Czy wszystkie uytkowniki mają ponad 18 lat? ${useR18}`);

let wydatki = [45, 120, 30, 85];
const total = wydatki.reduce(function(sum, x){
    return sum + x;
}, 0);
console.log(total);


let wydatki1 = [452, 1201, 3220, 85];
const total1 = wydatki1.reduce(function(sum, x){
    return sum + x;
}, 0);
console.log(total1);


let wyniki = [23, 78, 45, 91, 12];
const BigWynik = wyniki.reduce(function(big, x){
if(x > big){
    return big = x;
} else {
    return;
};

}, 0);
console.log(BigWynik);

let liczby2 = [5, 10, 15, 20];
const sum1 = liczby2.reduce(function(sum, x){
    return sum + x;
}, 0);
console.log(sum1);

let liczby3 = [3, 2, 1];
const iloczyn = liczby3.reduce(function(sum, x){
    return sum * x;
}, 1)
console.log(iloczyn);
// skumałem e nie moemy tu zaczynac od 0, bo wtedy 0 * coś = 0

let liczby4 = [45, 12, 88, 7, 40];
const small = liczby4.reduce(function(smallest, x){
    if(smallest < x){
        return smallest;
    }else{
        return x;
    }
}, 100);
console.log(small);

let liczby5 = [30, 70, 20, 90, 55, 10];
const fifty = liczby5.reduce(function(fif, x){
    if (x > 50){
        return fif + 1;
    } else {
        return fif;
    }
}, 0);
console.log(fifty);

let liczby6 = [1, 2, 3, 4, 5, 6];
const even = liczby6.reduce(function(num, x){
    if(x % 2 === 0){
        return num + x
    } else {
        return num;
    }
}, 0);
console.log(even);

let slowa = ["JavaScript", "jest", "trudny", "ale", "ciekawy"];
const zdanie = slowa.reduce(function(words, x){
    return words+ " " + x;
},);
console.log(zdanie);

console.log(zdanie.length);

let owoce = ["jabłko", "banan", "gruszka", "śliwka"];
const owoceOwoce = owoce.reduce(function(word, x){
    return word + ", " + x;
});
console.log(owoceOwoce);

let slowa2 = ["kot", "pies", "chomik"];
const dlugosc = slowa2.reduce(function(word, x){
    return word + x.length;
}, 0);
console.log(dlugosc);

let slowa4 = ["kot", "hipopotam", "pies", "słoń"];
const bigWord = slowa4.reduce(function(word, x){
    if (word.length > x.length){
        return word;
    } else {
        return x;
    }
}, );
console.log(bigWord);

let slowa6 = ["parasol", "kot", "telewizor", "dom"];
const short = slowa6.reduce(function(word, x){
    if(word.length < x.length){
        return word;
    } else {
        return x;
    }
});
console.log(short);

let users2 = [
  { name: "Ana", age: 25 },
  { name: "Piotr", age: 41 },
  { name: "Kasia", age: 33 }
];
const oldest = users2.reduce(function(user, x){
    if(user.age > x.age){
        return user;
    } else {
        return x;
    }
}, {});
console.log(oldest);

let produkty = [
  { nazwa: "laptop", cena: 3500 },
  { nazwa: "myszka", cena: 80 },
  { nazwa: "monitor", cena: 1200 }
];
const prod = produkty.reduce(function(produkt, x){
    if(produkt.cena > x.cena){
        return produkt;
    } else {
        return x;
    }
}, {});
console.log(prod);


let glosy = ["pizza", "sushi", "pizza", "burger", "pizza"];

const wynik = glosy.reduce(function(kula, glos){
    
    if (kula[glos]) {           // czy to pole już istnieje w kuli?
        kula[glos] = kula[glos] + 1;    // DZIURA 1: jak zwiększyć istniejący licznik?
    } else {
        kula[glos] = 1;    // DZIURA 2: od jakiej liczby zacząć nowy?
    }
    
    return kula;                // zwracamy kulę (powiększoną) do następnego kroku
    
}, {});                         // start: pusty obiekt

console.log(wynik);

let glosy2 = ["pizza", "sałata", "sushi", "pizza", "burger", "pizza"];
const wynik2 = glosy2.reduce(function(kula, glos){
    if(kula[glos]){
        kula[glos] = kula[glos] + 1;
    } else {
        kula[glos] = 1;
    }
    return kula;
}, {})
console.log(wynik2);

let litery = ["a", "b", "a", "c", "b", "a"];
const bukwy = litery.reduce(function(kula, bukwa){
    if(kula[bukwa]){
        kula[bukwa] = kula[bukwa] + 1;
    } else {
        kula[bukwa] = 1;
    }
    return kula;
}, {});
console.log(bukwy);

let produkty0 = [
  { nazwa: "laptop", kategoria: "elektronika" },
  { nazwa: "koszulka", kategoria: "ubrania" },
  { nazwa: "monitor", kategoria: "elektronika" },
  { nazwa: "spodnie", kategoria: "ubrania" },
  { nazwa: "mysz", kategoria: "elektronika" }
];
const listOfProdukts = produkty0.reduce(function(kula, prod){
    if(kula[prod.kategoria]){
        kula[prod.kategoria] = kula[prod.kategoria] + 1;
    } else {
        kula[prod.kategoria] = 1;
    }
    return kula;
}, {});
console.log(listOfProdukts);

let wydatki2 = [
  { kategoria: "jedzenie", kwota: 45 },
  { kategoria: "transport", kwota: 20 },
  { kategoria: "jedzenie", kwota: 80 },
  { kategoria: "rozrywka", kwota: 60 },
  { kategoria: "transport", kwota: 15 }
];
const costs = wydatki2.reduce(function(kula, prod){
    if(kula[prod.kategoria]){
        kula[prod.kategoria] = kula[prod.kategoria] + prod.kwota;
    } else {
        kula[prod.kategoria] = prod.kwota
    }
    return kula;
}, {});
console.log(costs);

let imiona0 = ["Ania", "Bartek", "Adam", "Celina", "Bogdan", "Alicja"];
const firstLetter = imiona0.reduce(function(kula, x){
    if(kula[x[0]]){
        kula[x[0]] = kula[x[0]] + 1;
    } else {
        kula[x[0]] = 1;
    }
    return kula;
}, {})
console.log(firstLetter);

let produkty4 = [
  { nazwa: "laptop", kategoria: "elektronika" },
  { nazwa: "koszulka", kategoria: "ubrania" },
  { nazwa: "monitor", kategoria: "elektronika" },
  { nazwa: "spodnie", kategoria: "ubrania" }
];
const list = produkty4.reduce(function(kula, x){
    if(kula[x.kategoria]){
        kula[x.kategoria].push(x.nazwa);
    } else {
        kula[x.kategoria] = [x.nazwa];
    }
    return kula;
}, {})
console.log(list);

let oceny1 = [5, 3, 5, 4, 3, 5, 2];
const listofOceny = oceny1.reduce(function(kula, x){
    if(kula[x]){
        kula[x] = kula[x] + 1; 
    } else {
        kula[x] = 1;
    }
    return kula;
}, {});
console.log(listofOceny);

let transakcje = [
  { osoba: "Ania", kwota: 100 },
  { osoba: "Bartek", kwota: 50 },
  { osoba: "Ania", kwota: 30 },
  { osoba: "Bartek", kwota: 70 },
  { osoba: "Ania", kwota: 20 }
];
const aa = transakcje.reduce(function(kula,x){
    if(kula[x.osoba]){
        kula[x.osoba] = kula[x.osoba] + x.kwota;
    } else {
        kula[x.osoba] = x.kwota;
    }
    return kula;
}, {});
console.log(aa);

let odpowiedzi = [true, false, true, true, false];
const licz = odpowiedzi.reduce(function(kula, x){
    if(kula[x]){
        kula[x] = kula[x] + 1;
    } else {
        kula[x] = 1;
    }
    return kula;
}, {});
console.log(licz);

let zamowienia = [
  { danie: "pizza", cena: 40 },
  { danie: "sushi", cena: 60 },
  { danie: "pizza", cena: 40 },
  { danie: "burger", cena: 35 }
];
const utarg = zamowienia.reduce(function(kula, x){
    return kula + x.cena;
}, 0)
console.log(utarg);