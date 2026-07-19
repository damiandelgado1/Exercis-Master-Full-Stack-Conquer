/* Request Enter number */
let number1 = Number(prompt("Ingresa el primero numero"))
let number2 = Number(prompt("Ingresa el segundo numero"))
let number3 = Number(prompt("Ingresa el tercer numero"))

/* Return message with enter Number */
function numeroMenor(numero_menor) {
    const numberArray = [
        number1, number2, number3
    ]

    return Math.min(...numberArray)
}

let resultado = numeroMenor()

console.log(`El numero mas pequeño es: ${resultado}`)