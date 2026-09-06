/* function test() {
    for (let i = 0; i < 3; i++){
    console.log("wewnątrz pętli, i =", i);
}
console.log("po pętli, próbuję uyć i:", i);
}
test();

for (var i = 0; i < 3; i++){
    setTimeout(() => console.log(i), 100);
}

for (var i = 0; i < 3; i++){
    console.log("wewnątrz pętli, i=", i);
}
console.log("PO pętli, i =", i);

let realI;

for (let i = 0; i < 3; i++){
    setTimeout(() => {
        if(i === 1){
            realI = i;
            console.log("To jest drugi obrót, i=", i);
        }
    })
}
setTimeout(() => {
    console.log("PO chwili, realI =", realI);
}, 200);
console.log("ty kurwo", realI);
 */
const user1 = {
    imie: "Bartek",
    pokaz: function() { console.log(this.imie); }
}
const user2 = {
    imie: "Kasia",
    pokaz: () => { console.log(this.imie); }
}

user1.pokaz();
user2.pokaz();

const zespol = {
    nazwa: "Druzyna A",
    pokazPoChwili: function () {
        setTimeout(() => {
            console.log("Zespół to: " + this.nazwa);
        }, 100);
    }
};
zespol.pokazPoChwili();

const samochod = {
    nazwa: "Mercedess",
    pokaz: function(){
        setTimeout(()=> {
            console.log("Nazwa auta to: " + this.nazwa);
        }, 1000);
    }
}
samochod.pokaz();

const zespol2 = {
    nazwa: "Drużyna B",
    pokazPoChwili: function() {
        setTimeout(function() {
            console.log("Zespół to: " + this.nazwa);
        }, 100);
    }
};

zespol2.pokazPoChwili();