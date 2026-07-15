/* Enter 3 number */
let number1 = Number(prompt("Ingresa el primer numero"))
let number2 = Number(prompt("Ingresa el segundo numero"))
let number3 = Number(prompt("Ingresa el tercer numero"))

/* Comparate if one of the 3 number is most larger than the other */
if (number1 > number2 && number1 && number3) {
    console.log(`El numero ${number1} es mayor a ${number2} y ${number3}`);
} else if (number2 > number1 && number2 > number3) {
    console.log(`El numero ${number2} es mayor a ${number1} y ${number3}`);
} else if (number3 > number1 && number3 > number2) {
    console.log(`El numero ${number3} es mayor a ${number1} y ${number2}`);
} else {
    console.log("Los 3 numeros son iguales")
}