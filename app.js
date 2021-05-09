//Global selections and varibles

const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");
let initialColors;






//Functions

//Color Generator
function generateHex() {
    //pure javascript way
    // const letters = "0123456789ABCDEF";
    // let hash = "#";

    // for (let i = 0; i < 6; i++) {
    //     hash += letters[Math.floor(Math.random() * 16)];
    // }
    // return hash;

    //Chorma.js way
    const hexColor = chroma.random();
    return hexColor;
}


function randomColors() {
    colorDivs.forEach((div, index) => {
        const hexText = div.children[0];
        const randomColor = generateHex();

        //add the color to the background
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;
    });
}
randomColors();