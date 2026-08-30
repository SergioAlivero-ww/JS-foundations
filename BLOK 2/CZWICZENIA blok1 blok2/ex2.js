const lista = document.getElementById("koszyk");
const nazwa = document.getElementById("nazwaProduktu");
const cena = document.getElementById("cenaProduktu");
const addBtn = document.getElementById("dodajProdukt")

function stworzKoszyk(){
    let koszyk = [];
    return {
        dodaj: function(nazwa, cena){
            const nowyProdukt = {nazwa, cena};
            koszyk = [...koszyk, nowyProdukt];
        },
        usun: function(nazwa){
            koszyk = koszyk.filter(p => p.nazwa !== nazwa);
            
        },
        suma: function(){
            const allCosts = koszyk.reduce((kula, p) => {
               return kula + p.cena;
            }, 0);
            console.log(allCosts);
        },
        pokaz: function(){
            console.log(koszyk);
        },
        stan: function(){
            return koszyk;
        }
    }
}

let koszyk1 = stworzKoszyk();
koszyk1.dodaj("jeensy", 50);
koszyk1.pokaz();
koszyk1.suma();
koszyk1.dodaj("bluza", 100);
koszyk1.dodaj("koszula", 25);
koszyk1.pokaz();
koszyk1.suma();
koszyk1.usun("jeensy");
koszyk1.suma();
koszyk1.dodaj("kurtka", 150);

function renderujKoszyk(){
    lista.innerHTML = "";
    koszyk1.stan().forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.nazwa}: ${p.cena} zł`;

        const btn = document.createElement("button");
        btn.textContent = "Usuń produkt z koszyka";
        btn.dataset.nazwa = p.nazwa;

        lista.appendChild(li);
        li.appendChild(btn);
    })
    const sumaWkoszyku = koszyk1.stan().reduce((kula, p) => {
        return kula + p.cena;
    }, 0);
    const sumaZakupow = document.getElementById("sumaKoszyka");
    sumaZakupow.textContent = `Suma do zapłaty: ${sumaWkoszyku}`;
}
renderujKoszyk();

lista.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON"){
        koszyk1.usun(event.target.dataset.nazwa);
        renderujKoszyk();
    }
    
})

addBtn.addEventListener("click", () => {
    if(nazwa.value === "" || cena.value === "" || cena.value < 0){
        return alert("Something ain't right")
    }else{
        koszyk1.dodaj(nazwa.value, Number(cena.value));
    }
    nazwa.value = "";
    cena.value = "";
    renderujKoszyk()
})