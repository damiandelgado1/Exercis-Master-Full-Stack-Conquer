// Ask if want search major or minor number
let numberSelect = prompt(`¿El numero que quiere buscar es Mayor o Menor?`);

let numbers = [];

let numberMajor;
let numberMinor;

if (numberSelect == "mayor") {

    // Among how many want to search
    let amountNumber = parseInt(prompt(`¿Entre cuantos Numeros quiere buscar ese Numero?`));

    for (let i = 0; i < amountNumber; i++) {
        let number = parseInt(prompt(`Ingresa el Numero ${i}`));

        console.log(`Numero ${number} añadido`);
        numbers.push(number);

        if (i === 0) {
            numberMajor = number;
        } else if (number > numberMajor) {
            numberMajor = number;
        }

    }

    console.log(`El numero mayor es ${numberMajor}`);

} else {
    // Among how many want to search
    let amountNumber = parseInt(prompt(`¿Entre cuantos Numeros quiere buscar ese Numero?`));

    for (let i = 0; i < amountNumber; i++) {
        let number = parseInt(prompt(`Ingresa el Numero ${i}`));

        console.log(`Numero ${number} añadido`);
        numbers.push(number);

        if (i === 0) {
            numberMinor = number;
        } else if (number < numberMinor) {
            numberMinor = number;
        }

    }

    console.log(`El numero menor es ${numberMinor}`);

}