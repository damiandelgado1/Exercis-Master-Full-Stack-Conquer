// Number from 1 to 10
let numberRandom = Math.floor(Math.random() * 10) + 1;

// User has to attempt enter the Number
let number = Number(prompt(`Ingresa un Numero`));

// For each attempt show if the Number is major or minor
while (number !== numberRandom) {
    number = Number(prompt(`Numero incorrecto, intenta de nuevo`));
}

console.log("El numero es el correcto");