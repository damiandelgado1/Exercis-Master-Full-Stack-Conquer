// Create class result
class Calculadora {

    // Method add to add 2 number
    sumar(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;

        const result = number1 + number2;

        console.log(`La suma del numero ${number1} y el ${number2} es ${result}`);
    }

    // Method subtract to subtract 2 number
    resta(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;

        const result = number1 - number2;

        console.log(`La resta del numero ${number1} y el ${number2} es ${result}`);
    }

    // Method multiply to multiply 2 number
    multiplicar(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;

        const result = number1 * number2;

        console.log(`La multiplicacion del numero ${number1} y el ${number2} es ${result}`);
    }

    // Method split to split 2 number
    dividir(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;

        const result = number1 / number2;

        console.log(`La division del numero ${number} y el ${number2} es ${result}`);
    }
}

let number1 = Number(prompt(`Ingresa el primer numero`));
let number2 = Number(prompt(`Ingresa el segundo numero`));

let operation = prompt(`Indique una operacion`);

const calculadora = new Calculadora();

if (operation == "sumar") {
    calculadora.sumar(number1, number2);

} else if (operation == "restar") {
    calculadora.resta(number1, number2);

} else if (operation == "multiplicar") {
    calculadora.multiplicar(number1, number2);

} else if (operation == "dividir") {
    calculadora.dividir(number1, number2);

} else {
    console.log(`Operacion invalida`);
}