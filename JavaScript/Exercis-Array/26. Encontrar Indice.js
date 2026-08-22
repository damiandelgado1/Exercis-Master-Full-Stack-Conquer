let numbers = [];

// Enter number
let number1 = Number(prompt(`Ingresa el Numero`));
let number2 = Number(prompt(`Ingresa el Numero`));
let number3 = Number(prompt(`Ingresa el Numero`));
let number4 = Number(prompt(`Ingresa el Numero`));
let number5 = Number(prompt(`Ingresa el Numero`));

numbers.push(number1, number2, number3, number4, number5);

// Ask what value want find
let findIndice = Number(prompt(`¿Que indice esta buscando?`));

// Find the Number enter
const indiceFound = numbers.find(number => number === findIndice);