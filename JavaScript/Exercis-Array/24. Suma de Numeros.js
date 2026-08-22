let numbers = [];

// Enter numbers
let number1 = Number(prompt(`Ingresa el primer Numero`));
let number2 = Number(prompt(`Ingresa el segundo Numero`));
let number3 = Number(prompt(`Ingresa el tercer Numero`));
let number4 = Number(prompt(`Ingresa el cuarto Numero`));
let number5 = Number(prompt(`Ingresa el quinto Numero`));

numbers.push(number1, number2, number3, number4, number5);

// Add all numbers in the Array
const addNumbers = numbers.reduce((acumulador, number) => {
    return acumulador + number;
}, 0);

console.log(addNumbers);