document.getElementById("dziadek").addEventListener("click", function(event) {
    console.log("target:", event.target.id);
    console.log("na czym wisi listener:", this.id);
});

document.getElementById("lista").addEventListener("click", function(event) {
    console.log(event.target.dataset.imie)
})
/* 1 */
document.getElementById("produkty").addEventListener("click", function(event){
    console.log(event.target.dataset.cena);
})

/* 2 */
document.getElementById("zadania").addEventListener("click", function(event){
    if(event.target.classList.contains("usun")){
    event.target.parentElement.remove();
    };
})

document.getElementById("duzy").addEventListener("click", function(event){
    console.log("duzy");
})
document.getElementById("maly").addEventListener("click", function(event){
    console.log("maly");
})
document.getElementById("malutki").addEventListener("click", function(event){
    console.log("malutki");
})

document.getElementById("stary").addEventListener("click", (event) => {
    console.log(event.target.textContent);
})



function stworzLicznik() {
    let liczba = 0;
    return function() {
        liczba++;
        console.log(liczba);
    }
}
const a = stworzLicznik();
const b = stworzLicznik();
a();
a();
a();
b();
/* 1 2 3 1  -  b to jest niezalezne od a pódełko, wzięło tylko mechanizm i danne które byli w rodzicu funkcji, w naszym przypadku liczba = 0. closure - a i b mają rózne plecaki. */



const obiekt1 = {
    imie: "Bartek",
    pokaz: function(){
        console.log(this.imie);
    }
};

const obiekt2 = {
    imie: "Ania",
    pokaz: obiekt1.pokaz
}

obiekt1.pokaz();
obiekt2.pokaz();

/* Bartek Ania  -  bo this - mówi nam poka this imie w srodku obiektu - pokaz imie które jest w tym obiektu. this imie - to imie. jeze w mechanizmie tak uzywamy this to przy metodzie to co jest przed kropką decyduje na czym robimy metodę*/



function stworzKonto(wlasciciel){
    return {
        saldo: 100,
        pokaz: function() {
            console.log(`${wlasciciel}: saldo ${this.saldo}`);
        }
    }
}

const Julia = stworzKonto("Julia");
Julia.pokaz();



