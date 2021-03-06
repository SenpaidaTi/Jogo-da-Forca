import {Word} from "./Word.js";

//New game
const newGameButton = document.querySelector("#new-game");
const themeSelector = document.querySelector("#theme-selector");

newGameButton.addEventListener("click", () => {themeSelector.classList.toggle("visible")})

const listaFrutas = [
    "abacaxi",
    "laranja",
    "banana",
    "uva",
    "morango",
    "acerola",
    "abacate",
    "cacau",
    "caqui",
    "carambola"
];

const listaAnimais = [
    "cachorro",
    "elefante",
    "gato",
    "girafa",
    "coelho",
    "rato",
    "cobra",
    "camundongo",
    "tartaruga",
    "golfinho",
    "rinoceronte"
];

const listaCores = [
    "amarelo",
    "vermelho",
    "rosa",
    "verde",
    "azul",
    "roxo",
    "branco",
    "preto",
    "escarlate",
    "cinza",
    "ciano",
    "magenta"
];

const listaEsportes = [
    "futebol",
    "esgrima",
    "basquete",
    "boxe",
    "bocha",
    "ciclismo",
    "corrida",
    "halterofilismo"
]

const listFruits = [
    "apple",
    "pear",
    "grape",
    "orange",
    "strawberry",
    "melon",
    "watermelon"
]

const listAnimals = [
    "dog",
    "cat",
    "mouse",
    "elephant",
    "snake",
    "rabbit",
    "bunny",
    "turtle",
    "turtoise",
    "dolphin"
]

const listColors = [
    "red",
    "green",
    "blue",
    "cyan",
    "magenta",
    "yellow",
    "black",
    "white",
    "gray",
    "pink",
    "orange",
    "purple"
]

const listSports = [
    "football",
    "soccer",
    "volleyball",
    "basketball",
    "golf",
    "curling"
]

const listraDeFrutas = [
    "piña",
    "naranja",
    "plátano",
    "uva",
    "fresa",
    "acerola",
    "aguacate",
    "cacao",
    "caqui",
    "fruta estrella"
];

const listaAnimales = [
    "perro",
    "elefante",
    "gato",
    "jirafa",
    "conejito",
    "raton",
    "serpiente",
    "camundongo",
    "tortuga",
    "delfin",
    "rinoceronte"
];

const listaColores = [
    "amarillo",
    "rojo",
    "rosado",
    "verde",
    "azul",
    "violeta",
    "blanco",
    "negro",
    "escarlata",
    "Gris",
    "cian",
    "magenta"
];

const listaDeportes = [
    "futebol",
    "esgrima",
    "baloncesto",
    "boxeo",
    "bochas",
    "ciclismo",
    "correr",
    "halterofilismo"
];



let themeButtons = document.querySelectorAll(".theme");

const currentTheme = document.querySelector("#current-theme");

let currentWord;

const keys = document.querySelectorAll(".key");

themeButtons.forEach(function(theme){
    let themeList = eval(theme.dataset.theme);
    theme.addEventListener("click", function(){
        currentTheme.innerHTML = theme.innerHTML
        let newWord = themeList[Math.floor(Math.random() * themeList.length)];
        currentWord = new Word(newWord.toUpperCase());
        themeSelector.classList.remove("visible");
        alertBox.classList.remove("visible");
        gameKeyboard.classList.add("visible");
        keys.forEach(function(key) {
            key.classList.remove("pressed");
        })
    })
})

keys.forEach(function(key) {
    key.addEventListener("click", () => currentWord.checkCharacter(key.innerHTML, key))
})

const alertBox = document.querySelector("#alert-box");
const gameKeyboard = document.querySelector("#keyboard-container")

export function gameAlert(alertText) {
    alertBox.innerHTML = alertText;
    alertBox.classList.add("visible");
    gameKeyboard.classList.remove("visible");
}

export {currentWord, alertBox, gameKeyboard};