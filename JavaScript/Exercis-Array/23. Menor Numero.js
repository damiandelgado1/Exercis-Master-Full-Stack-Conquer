let numbers = [];

// Enter number
let number1 = Number(prompt(`El ingresa el primer numero`));
let number2 = Number(prompt(`El ingresa el segundo numero`));
let number3 = Number(prompt(`El ingresa el tercer numero`));
let number4 = Number(prompt(`El ingresa el cuarto numero`));
let number5 = Number(prompt(`El ingresa el quinto numero`));

numbers.push(number1, number2, number3, number4, number5);

// Find the minor Number
const minorNumber = Math.min(numbers);

console.log(`El numero menor es ${minorNumber}`);