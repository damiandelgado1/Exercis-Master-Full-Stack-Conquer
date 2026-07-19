/* Enter number's */
let number1 = prompt("Ingresa el primer numero")
let number2 = prompt("Ingresa el segundo numero")
let number3 = prompt("Ingresa el tercero numero")
let number4 = prompt("Ingresa el cuarto numero")
let number5 = prompt("Ingresa el quinto numero")

/* Suma all number's enter's and show result */
function sumaNumeros() {
    const numberSum = [
        number1, number2, number3, number4, number5
    ]

    return numberSum.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0)
}

let total = sumaNumeros()
console.log(`La suma de los Numeros del Array es ${total}`)