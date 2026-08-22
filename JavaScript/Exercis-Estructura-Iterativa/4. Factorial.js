// Request enter a Number
let number = parseInt(prompt(`Ingresa un Numero`));

let resultado = 1;

// Multply number input with the numbers precede
for (let i = 1; i <= number; i++) {
    resultado *= i;
}

console.log(`El resultado factorial de numeros es ${resultado}`);