// Consegna:
// Dato un array di oggetti letterali con:
// - url dell'immagine
//     - titolo
//     - descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter     stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
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
const prevEl = document.querySelector(".prev");

// freccia per andare indietro

// contatore immagine
let activeImage = 0;

// ciclo for per slide
for (let i = 0; i < images.length; i++) {
    let slideClass = "item";
    const currentImage = images[i].image;
    // SE è la prima slide aggiungiamo la classe active per visualizzarla
    if (i == activeImage) {
        slideClass += " active";
    }
    // slides
    const slide = `
    <div class="${slideClass}">
    <img src="${currentImage}" alt="slide" class="img-fluid">
    </div>
    `
    containerSlides.innerHTML += slide;

}
