// A function received a number
function getFactorial(factNumber) {

    let total = 1;

    // Multiply the Number received for all Number previous
    for (let i = 1; i <= factNumber; i++) {
        total *= i;
    }

    return total;
}

// Enter a Number
let numberFact = Number(prompt(`Ingresa el numero`));

let calculateFactorial = getFactorial(numberFact);

console.log(calculateFactorial);