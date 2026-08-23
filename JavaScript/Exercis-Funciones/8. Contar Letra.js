// A function received a letter and text
function countLetter(text, letter) {

    // Count how many Appear a letter in the text
    const appearLetter = text.split(letter).length - 1;

    console.log(appearLetter);
}

let text = prompt(`Ingresa un texto`);
let letter = prompt(`Ingresa la letra que buscas en el texto`);

let letterCount = countLetter(text, letter);

console.log(letterCount);