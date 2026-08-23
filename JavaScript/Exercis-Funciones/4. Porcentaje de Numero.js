// A function received a number and percentage
function getPercentage(number, percentage) {

    // Calculate the quantity received this percentaje in the Number
    const quantityPercentage = (number / percentage) * 100;

    console.log(`El porcentaje del numero ${number} es ${quantityPercentage}`);
}

let number = Number(prompt(`Ingresa un numero`));
let percentage = Number(prompt(`Ingresa un porcentaje`));

let totalPercentage = getPercentage(number, percentage);

console.log(totalPercentage);