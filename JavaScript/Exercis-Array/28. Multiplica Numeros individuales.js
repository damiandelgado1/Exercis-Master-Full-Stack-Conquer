let numbers = [];

// Enter number
let number1 = Number(prompt(`Ingresa el primer Numero`));
let number2 = Number(prompt(`Ingresa el segundo Numero`));
let number3 = Number(prompt(`Ingresa el tercer Numero`));
let number4 = Number(prompt(`Ingresa el cuarto Numero`));
let number5 = Number(prompt(`Ingresa el quinto Numero`));

numbers.push(number1, number2, number3, number4, number5);

// Ask the number want multiply
let numberMultiply = Number(prompt(`¿Porque numero quiere multiplicar?`));

let multiplyNumber = 1;

for (let i = 1; i < numbers; i++) {
    multiplyNumber = numbers * numberMultiply;

    // Display multiply every Number
    console.log(multiplyNumber);
}
