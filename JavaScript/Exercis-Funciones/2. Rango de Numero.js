// A function received a range the Numbers
function inRange(limitMin, limitMax, numberEnter) {

    // Verified if the Number enter this in range
    if (numberEnter >= limitMin && numberEnter <= maxLimit) {

        // Return true o false
        console.log(`El numero esta dentro del rango`);

    } else {
        console.log(`El numero no esta dentro del rango`);
    }

}



// Enter a number, a max and min limit
let minLimit = Number(prompt(`Indique el limite minimo`));
let maxLimit = Number(prompt(`Indique el limite maximo`));
let number = Number(prompt(`Ingresa un Numero`));

let verifyNumber = inRange(minLimit, maxLimit, number);

console.log(verifyNumber);