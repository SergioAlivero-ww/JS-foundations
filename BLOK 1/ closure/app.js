


function test() {
    const r = 5;
    function testShow(){
        return r;
    }
    return testShow;
}

const test1 = test();
console.log(test1());


function test2() {
    const t = 10;
    const y = 15
    function addTest(){
        return t + y;
    }
    return addTest;
}

const test3 = test2();
console.log(test3());

function adding(){
    const ee = 28;
    const rr = 44;
    function adding1(){
        return ee + rr;
    }
    return adding1;
}
const ed = adding();
console.log(ed);

function zewnetrzna() {
    let liczba = 0;
    function wewnetrzna(){
        liczba += 1;
        console.log(liczba);
    }
    return wewnetrzna;
}
const errr = zewnetrzna();
errr();
errr();
errr();


function brr() {
    let liczba = 0;
    function brrr(){
        liczba += 1;
        console.log(liczba);
    }
    return brrr;
}
const Fbrr = brr();
Fbrr();
Fbrr();
Fbrr();

function adddd (a, b){
    
    console.log(a + b);
}

adddd(2, 5);

adddd(10, 19389203);

function zewnetrzna1 (start){
    let liczba = start;
    function wewnetrzna(){
        liczba += 1;
        console.log(liczba);
    }
    return wewnetrzna;
}
const function1 = zewnetrzna1(10);
function1();
function1();


function zewnetrzna2(start){
    let liczba = start;
    function wewnetrzna2(){
        liczba += 1;
        console.log(liczba);
    }
    return wewnetrzna2;
}
const function2 = zewnetrzna2(20);
function2();
function2();
function2();

function zewnetrzna3(start){
    let liczba = start;
    return {
        dodaj: function(){
            liczba += 1;
            console.log(liczba);
        },
        odejmij: function(){
            liczba -= 1;
            console.log(liczba);
        }
    }

}
const licznik = zewnetrzna3(20);
licznik.dodaj();
licznik.dodaj();

function stworzLicznik20(num){
    function zrobto(mnoznik){
        const wynik = num * mnoznik;
        console.log(wynik);

    }
    return zrobto;
}
const podwaj = stworzLicznik20(2);
podwaj(20);
podwaj(40);
const potroj = stworzLicznik20(3);
potroj(10);

