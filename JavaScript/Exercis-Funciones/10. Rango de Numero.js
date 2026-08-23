// A function received 2 number
function getRange(number1, number2) {

    // Generate range of Number
    let result = [];

    // Enter 2 number
    if (number1 <= number2) {
        for (let i = number1; i <= number2; i++) {
            result.push(i);
        }
    } else {
        for (let i = a; i >= b; i--) {
            result.push(i);
        }
    }

    return result;
}

let number1 = Number(prompt(`Ingresa el primer numero`));
let number2 = Number(prompt(`Ingresa el segundo numero`));

let numRange = getRange(number1, number2);

console.log(numRange);