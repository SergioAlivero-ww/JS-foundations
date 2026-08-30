function stworzGracza(imie){
    let punkty = 0;
    return {
        zdobadz: function(ile) {
            punkty = punkty + ile;
            console.log(`Gracz ${imie} zdobywa ${ile} punktów. Suma punktów wynosi: ${punkty}.`);
        },
        pokaz: function(){
            console.log(`Gracz ${imie} ma ${punkty} pct.`)
        },
        wynik: function(){
            return punkty;
        }
    };

}
const gracz = stworzGracza("Ania");
gracz.zdobadz(5);
gracz.zdobadz(3);
gracz.pokaz();

const gracz2 = stworzGracza("Dominik");
gracz2.zdobadz(4);
gracz.zdobadz(2);
gracz.pokaz();
gracz2.pokaz();

const gracze = [gracz, gracz2];

const points = gracze.reduce(function(kula, x){
    return kula + x.wynik();
    
}, 0);

console.log(`Suma wszystkich punktów graczy to ${points}`);

const theBest = gracze.reduce(function(kula, x){
    if (x.wynik() > kula.wynik()){
        return x;
    } else {
        return kula;
    }
});
theBest.pokaz();



/* SECOND TASK */

function stworzKonto(wlasciciel){
    let saldo = 0;
    return {
        wplac: function(kwota){
            saldo = saldo + kwota;
            console.log(`Stan konta uzytkownika ${wlasciciel} wynosi: ${saldo} zł.`);
        },
        wyplac: function(kwota){
            if(saldo < kwota){
                console.log(`Brak dostępnych środków dla realizacji operacji.`);
            } else {
                saldo = saldo - kwota;
                console.log(`Stan konta uzytkownika ${wlasciciel} wynosi: ${saldo} zł.`);
            }
        },
        stan: function(){
            return saldo;
        },
        pokaz: function(){
            console.log(wlasciciel);
        }
    };
}

const user1 = stworzKonto("Serhii Likhachov");
const user2 = stworzKonto("Jakub Zdybel");
const user3 = stworzKonto("Małgorzata Likhachova");

user1.wplac(200);
user1.wplac(50);
user3.wplac(300);
user2.wplac(100);
user1.wyplac(100);

const users = [user1, user2, user3];

const allMoney = users.reduce(function(kula, x){
    return kula + x.stan();
}, 0);
console.log(`Właczna kwota naszych uytkowników wynosi: ${allMoney} zł.`);

const richest = users.reduce(function(lider, x){
    if(x.stan() > lider.stan()){
        return x;
    } else {
        return lider;
    }
});
richest.pokaz();
