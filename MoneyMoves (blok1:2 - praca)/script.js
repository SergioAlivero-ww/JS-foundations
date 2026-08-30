const header = document.getElementById("head");
const appName = document.getElementById("nazwaApki");
const fomularz = document.getElementById("formularz");
const formKP = document.getElementById("formularzKP");
const formKW = document.getElementById("formularzKW");
const pole = document.getElementById("poleFormularza");
const trans = document.getElementById("listaTranzakcji");
const history = document.getElementById("h2story");
const storyList = document.getElementById("lista");
const sumSec = document.getElementById("posumowanie");
const sum = document.getElementById("saldo");
const filtrWszystko = document.getElementById("filtrWszystko");
const filtrKP = document.getElementById("filtrKP");
const filtrKW = document.getElementById("filtrKW");

let tranzakcje = [];
let aktualnyFiltr = "wszystko";
let kategorie = [];

function zapiszDane() {
    localStorage.setItem("tranzakcje", JSON.stringify(tranzakcje));
    localStorage.setItem("kategorie", JSON.stringify(kategorie));
}

if (localStorage.getItem("tranzakcje")) {
    tranzakcje = JSON.parse(localStorage.getItem("tranzakcje"));
}
if (localStorage.getItem("kategorie")) {
    kategorie = JSON.parse(localStorage.getItem("kategorie"));
}

formKP.addEventListener("click", () => {
    pole.innerHTML = "";

    const KPfrom = document.createElement("input");
    KPfrom.placeholder = "Wpisz zródło dochodu";
    pole.appendChild(KPfrom);

    const KPamount = document.createElement("input");
    KPamount.placeholder = "Kwota";
    pole.appendChild(KPamount);

    const KPopis = document.createElement("textarea");
    KPopis.placeholder = "Opisz to KP (opcjonalnie)";
    KPopis.maxLength = 100;
    pole.appendChild(KPopis);

    const saveBtnKP = document.createElement("button");
    saveBtnKP.textContent = "Zapisz KP";
    pole.appendChild(saveBtnKP);

    saveBtnKP.addEventListener("click", () => {
        const cel = KPfrom.value;
        const amount = KPamount.value;
        const opis = KPopis.value;
        if(cel === ""){
           return alert("Polę zródła dochodu nie moze być puste");
        } 
        if(isNaN(Number(amount)) || Number(amount) <= 0){
            return alert("Proszę podac kwotę, nie moze ona być ujemna");
        }
        const nowaTranzakcja =  {
            typ: "KP",
            cel,
            kwota: Number(amount),
            opis,
            data: new Date().toLocaleDateString()
        }

        tranzakcje = [...tranzakcje, nowaTranzakcja];
        pole.innerHTML = "";
        renderujTranzakcje();
        zapiszDane();
    })
})

formKW.addEventListener("click", () => {
    pole.innerHTML = "";

    const KWfrom = document.createElement("input");
    KWfrom.placeholder = "Wpisz cel wydatku";
    pole.appendChild(KWfrom);

    const KWamount = document.createElement("input");
    KWamount.placeholder = "Kwota";
    pole.appendChild(KWamount);

    const KWopis = document.createElement("textarea");
    KWopis.placeholder = "Opisz to KW (opcjonalnie)";
    KWopis.maxLength = 100;
    pole.appendChild(KWopis);

    const KWkategoria = document.createElement("input");
    KWkategoria.setAttribute("list", "listaKategorii");
    KWkategoria.placeholder = "Wpisz lub wybierz kategorię";
    pole.appendChild(KWkategoria);

    const saveBtnKW = document.createElement("button");
    saveBtnKW.textContent = "Zapisz KW";
    pole.appendChild(saveBtnKW);

   

    const datalist = document.createElement("datalist");
    datalist.id = "listaKategorii";
    kategorie.forEach(k => {
        const opcja = document.createElement("option");
        opcja.value = k;
        datalist.appendChild(opcja);
    });
    pole.appendChild(datalist);

    saveBtnKW.addEventListener("click", () => {
        const cel = KWfrom.value;
        const amount = KWamount.value;
        const opis = KWopis.value;
        if(cel === ""){
           return alert("Polę celu wydatku nie moze być puste");
        } 
        if(isNaN(Number(amount)) || Number(amount) <= 0){
            return alert("Proszę podac kwotę, nie moze ona być ujemna");
        }
        const nowaTranzakcja =  {
            typ: "KW",
            cel,
            kwota: Number(amount),
            opis,
            data: new Date().toLocaleDateString(),
            kategoria: KWkategoria.value
        }
        if (!kategorie.includes(KWkategoria.value)) {
            kategorie = [...kategorie, KWkategoria.value];
        }

        tranzakcje = [...tranzakcje, nowaTranzakcja];
        pole.innerHTML = "";
        renderujTranzakcje();
        zapiszDane();
    })
})

function renderujTranzakcje(){
    storyList.innerHTML = "";

     let doPokazania = tranzakcje;
    if (aktualnyFiltr === "KP") {
        doPokazania = tranzakcje.filter(t => t.typ === "KP");
    } else if (aktualnyFiltr === "KW") {
        doPokazania = tranzakcje.filter(t => t.typ === "KW");
    }
    if (doPokazania.length === 0) {
    const brak = document.createElement("p");
    brak.textContent = "Brak transakcji do wyświetlenia.";
    brak.style.color = "#94a3b8";
    storyList.appendChild(brak);
    }

    doPokazania.forEach((t, i) => {
    const li = document.createElement("li");
    
    const nazwa = document.createElement("span");
    nazwa.textContent = t.cel;
    
    const kwota = document.createElement("span");
    kwota.textContent = t.typ === "KP" ? `+${t.kwota} zł` : `-${t.kwota} zł`;
    kwota.classList.add(t.typ === "KP" ? "kwota-plus" : "kwota-minus");

    const typEl = document.createElement("span");
    typEl.textContent = t.typ === "KP" ? "Przychód" : "Wydatek";
    typEl.classList.add(t.typ === "KP" ? "typ-kp" : "typ-kw");

    const data = document.createElement("small");
    data.textContent = t.data;
    data.style.color = "#94a3b8";

    const opisEl = document.createElement("p");
    opisEl.textContent = t.opis || "";
    opisEl.classList.add("opis-transakcji");

    const lewaStrona = document.createElement("div");
    lewaStrona.classList.add("lewa");
    lewaStrona.appendChild(typEl);
    lewaStrona.appendChild(nazwa);
    lewaStrona.appendChild(kwota);

    const prawaStrona = document.createElement("div");
    prawaStrona.classList.add("prawa");
    prawaStrona.appendChild(data);

    const gornyRzad = document.createElement("div");
    gornyRzad.appendChild(lewaStrona);
    gornyRzad.appendChild(prawaStrona);
    li.appendChild(gornyRzad);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Usuń tranzakcję";
    deleteBtn.dataset.index = i;

    const kategoriaEl = document.createElement("small");
    kategoriaEl.textContent = t.kategoria ? `${t.kategoria}` : "";

    storyList.appendChild(li);
    prawaStrona.appendChild(kategoriaEl);
    li.appendChild(opisEl);
    li.appendChild(deleteBtn);
    
    
    })
    const saldo = tranzakcje.reduce((suma, t) => {
    if(t.typ === "KP"){
        return suma + t.kwota;
    } else { 
        return suma - t.kwota;
    }
    }, 0);  
    sum.textContent = `Saldo na ten moment wynosi: ${saldo} zł.`
    
}
renderujTranzakcje();

storyList.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON"){
        const index = Number(event.target.dataset.index);
        tranzakcje = tranzakcje.filter((t, i) => i !== index);
        renderujTranzakcje();
    }
})


filtrWszystko.addEventListener("click", () => {
    aktualnyFiltr = "wszystko";
    renderujTranzakcje();
});

filtrKP.addEventListener("click", () => {
    aktualnyFiltr = "KP";
    renderujTranzakcje();
});

filtrKW.addEventListener("click", () => {
    aktualnyFiltr = "KW";
    renderujTranzakcje();
});