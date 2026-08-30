let liczby = [3, 8, 1, 10, 6, 2];
const liczbyx2 = liczby.map(function(x){
    return x * 2;
});
console.log(liczbyx2);

const bigLiczby = liczby.filter(function(x){
    return x > 5;
});
console.log(bigLiczby);

const suma = liczby.reduce(function(kula, x){
    return kula + x;
}, 0);
console.log(suma);

/* KURWA CLOUSER */

function stworzLicznik(){
    let liczba = 0;
    function ww() {
        liczba = liczba + 1;
        console.log(liczba);
    }
    return ww;
}

const dodaj = stworzLicznik();
dodaj();
dodaj();
dodaj()

function stworzLicznik1(){
    let liczba = 0;
    function dodaj(){
        liczba = liczba + 1;
        console.log(liczba);
    }
    return dodaj;
}

const plus = stworzLicznik1();
plus();
plus();
plus();
const plusplus = stworzLicznik1();
plusplus()
plus();
plusplus();

function stworzLicznik2(krok){
    let a = 0;
    function dodajLiczbe(){
        a = a + krok;
        console.log(a);
    }
    return dodajLiczbe;
}
const Liczba = stworzLicznik2(5);
Liczba();
Liczba();
Liczba();

function stworzLicznik3(){
    let b = 0;
    function dodajLiczbe2(krok){
        b = b + krok;
        console.log(b);
    }
    return dodajLiczbe2;
}
const Liczba1 = stworzLicznik3();
Liczba1(4);
Liczba1(5);

function greeting(name){
    let hello;
    function hi(){
        hello = `Hello, ${name}`;
        console.log(hello);
    }
    return hi;
}
const Greetings = greeting("Ania");
Greetings();



function haslo(has){
    let a = has;
    function tue(proba){
        if(proba === has){
            console.log("Otwrte");
        } else {
            console.log("Podano błędne hsło");
        }
    }
    return tue;
}
const proba1 = haslo(1234);
proba1(1235);
proba1(1234);

proba1(231423);

function stworzLicznik10(){
    let liczba10 = 0;
    return {
        add: function(){
            liczba10 = liczba10 + 1;
            console.log(liczba10);
        },
        pokaz: function(){
            console.log(liczba10);
        }
    }
}
const l = stworzLicznik10();
l.add();
l.add();
l.pokaz();

