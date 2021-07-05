// selektori
const polja = document.querySelectorAll(".polje");
const startBtn = document.querySelector(".startbtn");
const mainBar = document.querySelector("#main");
var brojač = -1;
const pitanje = document.querySelector("#pitanje");
const nextq = document.querySelector(".nextq");
const rednopitanje = document.querySelector("#rednopitanje");
const polje1 = document.querySelector(".polje1");
const polje2 = document.querySelector(".polje2");
const polje3 = document.querySelector(".polje3");
const polje4 = document.querySelector(".polje4");
const pitanjaOdgovori = {
    pitanje0:{
    pitanje: "Koji je glavni grad Njemačke?",
    odg1: "Berlin",
    odg2: "Minhen",
    odg3: "Dortmund",
    odg4: "Bon",
    },
    pitanje1:{
    pitanje: "Koji je glavni grad Italije?",
    odg1: "Rim",
    odg2: "Milano",
    odg3: "Napoli",
    odg4: "Breša"
    },
    pitanje2:{
    pitanje: "Koji je glavni grad Španije?",
    odg1: "Barselona",
    odg2: "Majorka",
    odg3: "Madrid",
    odg4: "Beliz"
    },
    pitanje3:{
    pitanje: "Koji je glavni grad Engleske?",
    odg1: "London",
    odg2: "Mančester",
    odg3: "Lids",
    odg4: "Njukasl"
    },
    pitanje4:{
    pitanje: "Koji je glavni grad Rusije?",
    odg1: "Sankt Petersburg",
    odg2: "Vladivostok",
    odg3: "Novosibirsk",
    odg4: "Moskva"
    },
    pitanje5:{
        pitanje: "Koji je glavni grad Srbije?",
    odg1: "Kraljevo",
    odg2: "Novi Sad",
    odg3: "Beograd",
    odg4: "Niš"
    },
    pitanje6:{
        pitanje: "Koji je glavni grad Bosne?",
    odg1: "Doboj",
    odg2: "Sarajevo",
    odg3: "Zenica",
    odg4: "Banja Luka"
    }
        
    
    
}
const listaPitanja = Object.entries(pitanjaOdgovori);
const listaTacnihOdg = ["Amsterdam","Berlin","Rim","Madrid","London","Moskva","Beograd","Sarajevo"];
const points = document.querySelector(".points");
const br1 = document.querySelector(".p1");
let p1 = parseInt(br1.innerText);
const body = document.querySelector("body");

// start button
startBtn.addEventListener("click", ()=>{
    mainBar.classList.remove("hiden");
    points.classList.remove("hiden");
    startBtn.remove();
})
// polja
polja.forEach(polje =>{
    polje.addEventListener("click", ()=>{
        if (listaTacnihOdg.includes(polje.textContent)) {
            polje.classList.add("tačno");
            nextq.classList.remove("hiden");
            br1.innerText =  p1+=2;
            polje.classList.add("noclick");
        } else{
            polje.classList.add("netačno");
            br1.innerText =  p1-=1;
            polje.classList.add("noclick");
        }
    })
})       
// pitanje i next button
function createPitanje() {
    nextq.addEventListener("click", ()=>{
    nextq.classList.add("hiden");
    brojač += 1;
    if (brojač === listaPitanja.length) {
        brojač += -1;
        rezultat();
    }
    rednopitanje.innerText= listaPitanja[brojač][1].pitanje;
    polje1.innerText =listaPitanja[brojač][1].odg1;
    polje2.innerText =listaPitanja[brojač][1].odg2;
    polje3.innerText =listaPitanja[brojač][1].odg3;
    polje4.innerText =listaPitanja[brojač][1].odg4;

    polja.forEach(polje =>{
        polje.classList.remove("netačno");
        polje.classList.remove("tačno");
        polje.classList.remove("noclick");
    })
})

}
createPitanje();

function rezultat() {
    mainBar.classList.add("hiden");
    points.classList.add("hiden");
    createRezbar();
}

function createRezbar() {
    let rezBar = document.createElement("div");
    rezBar.classList.add("rezbar");
    let rez = document.createElement("h2");
    rez.textContent = `osvojili ste ${br1.innerText} bodova`;
    rezBar.appendChild(rez);
    let okbtn = document.createElement("button");
    okbtn.textContent = "OK";
    okbtn.classList.add("okbtn");
    rezBar.appendChild(okbtn);
    okbtn.addEventListener("click", ()=>{
        location.reload();
    })
    body.appendChild(rezBar);
}

