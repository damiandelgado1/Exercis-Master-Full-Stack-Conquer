// A function received a Array with numbers
function filterNumberGreaterThan(arrNumber, limitNumber) {

    // Return Array with numbers to the limit number
    return arrNumber.filter(num => num < limitNumber);
}

let numbers = [4, 5, 2, 6, 7, 1, 9, 8, 3];
let numberLimit = Number(prompt(`Ingresa el Numero limite`));

const numArray = filterNumberGreaterThan(numbers, numberLimit);

console.log(numArray);