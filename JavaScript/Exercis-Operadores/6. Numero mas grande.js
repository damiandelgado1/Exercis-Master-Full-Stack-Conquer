/* Enter 2 number */
let number1 = Number(prompt(`Ingrese el primer numero `))
let number2 = Number(prompt(`Ingrese el primer numero `))

/* Comparate if one they is most big */
if (number1 > number2) {
    console.log(`El numero ${number1} es mayor a ${number2}`)
} else if (number2 > number1) {
    console.log(`El numero ${number2} es mayor a ${number1}`)
} else {
    console.log(`Los 2 numeros son iguales`)
}