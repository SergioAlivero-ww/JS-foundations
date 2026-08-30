const list = document.getElementById("lista");
let zadania = ["Kupić mleko", "Pogłaskac kotka", "Nakarmić kotka"];

function renderuj(){
    list.innerHTML = "";
    zadania.forEach((z, i) => {
        const li = document.createElement("li");
        li.textContent = z;

        const btn = document.createElement("button");
        btn.textContent = "usuń";
        btn.dataset.index = i;

        list.appendChild(li);
        li.appendChild(btn);
    })
}
renderuj();

list.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON"){
        const index = Number(event.target.dataset.index);
        zadania = zadania.filter((z, i) => i !== index);
        renderuj();
    }
})



const listTwo = document.getElementById("lista2");

let produkty = [
    { nazwa: "Chleb", cena: 5 },
    { nazwa: "Mleko", cena: 4 },
    { nazwa: "Ser", cena: 12 }
];

function renderuj2(){
    listTwo.innerHTML = "";
    produkty.forEach((p, i) => {
        const li = document.createElement("li");
        li.textContent = `${p.nazwa}: ${p.cena}`;

        const btn = document.createElement("button");
        btn.textContent = "usuń";
        btn.dataset.index = i;

        listTwo.appendChild(li);
        li.appendChild(btn);
    })

    const suma = produkty.reduce((kula, p) => {
        return  kula + p.cena
    }, 0)
    document.getElementById("suma").textContent = `Razem: ${suma} zł`;
}
renderuj2();

listTwo.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON"){
        const index = Number(event.target.dataset.index);
        produkty = produkty.filter((p, i) => i !== index);
        renderuj2();
    }
})




function stworzNawyk(nazwa){
    let licznik = 0;
    return {
        wykonaj: function(){
            licznik = licznik + 1;
        },
        stan: function(){
            return {nazwa, licznik};
        }
    };
}

const nawyk1 = stworzNawyk("Picie woday");
nawyk1.wykonaj();
console.log(nawyk1.stan());
const nawyk2 = stworzNawyk("Trenning");
nawyk2.wykonaj();
console.log(nawyk2.stan());
const nawyk3 = stworzNawyk("Ksiązka");
nawyk3.wykonaj();
console.log(nawyk3.stan());

const listAct = document.getElementById("lista3")

let nawyki = [nawyk1, nawyk2, nawyk3];

function renderList(){
    listAct.innerHTML = "";
    nawyki.forEach((n, i) => {
        const li = document.createElement("li");
        li.textContent = `${n.stan().nazwa}: ${n.stan().licznik}`;
        

        const btn = document.createElement("button");
        btn.textContent = "Wykonaj";
        btn.dataset.index = i;

        
    
        listAct.appendChild(li);
        li.appendChild(btn);


    })
    const sumaLicznikow = nawyki.reduce((suma, n) => {
            return suma + n.stan().licznik;
        }, 0)
        document.getElementById("suma2").textContent = `Suma wykonanych zadań: ${sumaLicznikow}`
}
renderList();

listAct.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON"){
        const index = Number(event.target.dataset.index);
        nawyki.forEach((n, i) => {
            if(index === i){
                n.wykonaj();
            }
        })
        renderList()
    }
})

const input = document.getElementById("nowyNawyk");
const listaFour = document.getElementById("lista4");
const btnNawyk = document.getElementById("dodajBtn");

function stworzNawyk2(nazwa){
    let licznik = 0;
    return {
        wykonaj: function(){
            licznik = licznik + 1;
        },
        stan: function(){
            return {nazwa, licznik};
        }
    };
}

let nawyki2 = [];

btnNawyk.addEventListener('click', () => {
    if(input.value !== ""){
        const nowyNawyk = stworzNawyk2(input.value);
        nawyki2 = [...nawyki2, nowyNawyk];
        input.value = "";
    }else{ 
        return alert("Wpisz coś typie");
    }
    renderList2();
})


function renderList2(){
    listaFour.innerHTML = "";
    nawyki2.forEach((n, i) => {
        const li = document.createElement("li");
        li.textContent = `${n.stan().nazwa}: ${n.stan().licznik}`;
        

        const btn = document.createElement("button");
        btn.textContent = "Wykonaj";
        btn.dataset.index = i;

        
    
        listaFour.appendChild(li);
        li.appendChild(btn);


    })
    const sumaLicznikow2 = nawyki2.reduce((suma, n) => {
            return suma + n.stan().licznik;
        }, 0)
        document.getElementById("suma2").textContent = `Suma wykonanych zadań: ${sumaLicznikow2}`
}

listaFour.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON"){
        const index = Number(event.target.dataset.index);
        nawyki2.forEach((n, i) => {
            if(index === i){
                n.wykonaj();
            }
        })
        renderList2()
    }
})
