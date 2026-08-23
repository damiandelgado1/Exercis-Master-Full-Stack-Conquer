// A function received a number
function isOdd(n) {

    // Determinate if the Number is pair or odd
    if (n % 2 === 0) {
        // Return logic result
        return false;
    } else {
        return true;
    }
}

let number = Number(prompt(`Ingrese el Numero`));

let numberOdd = isOdd(number);
console.log(numberOdd);