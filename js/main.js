// Consegna:
// Dato un array di oggetti letterali con:
// - url dell'immagine
//     - titolo
//     - descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter     stilare lo slider. OK!
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello. OK?
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
//     Milestone 2:
// Aggiungere il ** ciclo infinito ** del carosello.Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra

// ARRAY DI OGGETTI
const images = [

    // slide 0
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    // slide 1
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    // slide 2 
    {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    // slide 3
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    // slide 4
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// ciclo for in per stampare gli oggetti in console
for (slide in images) {
    console.log(images[slide]);
}

// CAROSELLO 

// contenitore per le slide
const containerSlides = document.querySelector(".items");
// freccia per andare avanti
const nextEl = document.querySelector(".next");
// freccia per andare indietro
const prevEl = document.querySelector(".prev");


// contatore immagine
let activeImage = 0;

// ciclo for per slide
for (let i = 0; i < images.length; i++) {
    let slideClass = "item";
    const currentImage = images[i].image;
    const currentText = images[i].text;
    // console.log(currentText)
    const currentTitle = images[i].title;
    // SE è la prima slide aggiungiamo la classe active per visualizzarla
    if (i == activeImage) {
        slideClass += " active";
    }
    // slides
    const slidesEl = `
    <div class="${slideClass}">
    <img src="${currentImage}" alt="slide" class="img-fluid">
    <h2>${currentTitle}</h2>
    <h2>${currentText}</h2>
    </div>
    `
    containerSlides.innerHTML += slidesEl;

}

// CLICK SULLA FRECCIA INDIETRO 
prevEl.addEventListener(
    "click",
    function () {
        // recupero TUTTE le slide
        const slides = document.querySelectorAll(".item");
        // da activeImage rimuovo la classe "active"
        slides[activeImage].classList.remove("active");
        // decremento activeImage
        activeImage--;
        // LOOP CIRCOLARE (vedrò le foto al scorrendo al contrario)
        if (activeImage < 0) {
            activeImage = slides.length - 1;
        }
        // alla slide con activeImage assegno la classe "active"
        slides[activeImage].classList.add("active");

    }
)

// CLICK SULLA  FRECCIA AVANTI
nextEl.addEventListener(
    "click",
    function () {
        // recupero TUTTE le slide
        const slides = document.querySelectorAll(".item");
        // da activeImage rimuovo la classe "active"
        slides[activeImage].classList.remove("active");
        // incremento activeImage
        activeImage++;

        // LOOP CIRCOLARE (dopo l'ultima foto dell'array ricomincia dalla prima)
        if (activeImage >= slides.length) {
            activeImage = 0;
        }
        // alla slide con activeImage assegno la classe "active"
        slides[activeImage].classList.add("active");

        console.log(slides);
    }
)