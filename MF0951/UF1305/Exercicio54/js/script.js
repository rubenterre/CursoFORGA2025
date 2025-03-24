// Exercicio 54 - Sons de animais

document.addEventListener("DOMContentLoaded", function(){

// JSON
const animales = {
    "Gato": {
        "link": "./assets/audio/gato.mp3",
        "img": "./assets/img/gato.webp",
        "name": "Gato",
        "color":"#72B2B2",
        "border": "#72B2B2"
    },
    "Can": {
        "link": "./assets/audio/can.mp3",
        "img": "./assets/img/can.webp",
        "name": "Can",
        "color":"#7EBE4C",
        "border": "#27A738"
    },
    "León": {
        "link": "./assets/audio/leon.mp3",
        "img": "./assets/img/leon.webp",
        "name": "León",
        "color": "#E82C13",
        "border":"#D31B0D"

    },
    "Cabalo": {
        "link": "./assets/audio/cabalo.mp3",
        "img": "./assets/img/cabalo.webp",
        "name": "Cabalo",
        "color": "#D3970F",
        "border":"#D3970F"
    },
    "Vaca": {
        "link": "./assets/audio/vaca.mp3",
        "img": "./assets/img/vaca.webp",
        "name": "Vaca",
        "color": "#27A738",
        "border": "#27A738"
    },
    "Cabuxa": {
        "link": "./assets/audio/cabuxa.mp3",
        "img": "./assets/img/cabuxa.webp",
        "name": "Cabuxa",
        "color": "#6A84A3"
    },
    "Hipopótamo": {
        "link": "./assets/audio/hipopotamo.mp3",
        "img": "./assets/img/hipopotamo.webp",
        "name": "Hipopótamo",
        "color": "#27A738",
        "border": "#27A738"

    },
    "Pinguín": {
        "link": "./assets/audio/pinguin.mp3",
        "img": "./assets/img/pinguin.webp",
        "name": "Pinguín",
        "color": "#8DC9CC",
        "border": "#72B2B2"

    }

};


const container = document.getElementById("animalsContainer");
const template = document.getElementById("bottonAnimal");

// Recorrer o JSON
Object.values(animales).forEach(animal => {
    // Clonar template
    const clone = template.content.cloneNode(true);

    // Obter elementos do clon
    const button = clone.querySelector("button");
    const img = clone.querySelector("img");
    const nombre = clone.querySelector("p");


    // Asignar valores
    img.src = animal.img;
    img.alt = `Icono de ${animal.name}`;
    nombre.textContent = animal.name;
    button.style.background = animal.color;
    button.style.borderColor = animal.border;

    button.addEventListener("click", () => {
        const audio = new Audio(animal.link);
        audio.play();
    });

    container.appendChild(clone);
});
})