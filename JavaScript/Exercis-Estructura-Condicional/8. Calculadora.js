/* Enter a operation math */
let operation_math = prompt(`Elija una operacion matematica `)

if (operation_math == "SUMA") {
    
    /* Enter 2 number */
    let number_1 = Number(prompt("Ingrese el primero numero "))
    let number_2 = Number(prompt("Ingrese el segundo numero "))

    suma = number_1 + number_2

    console.log(`El resultado de la suma entre ${number_1} y ${number_2} es ${suma}`)

} else if (operation_math == "RESTA") {

    /* Enter 2 number */
    let number_1 = Number(prompt("Ingrese el primero numero "))
    let number_2 = Number(prompt("Ingrese el segundo numero "))

    resta = number_1 - number_2

    console.log(`El resultado de la suma entre ${number_1} y ${number_2} es ${resta}`)

} else if (operation_math == "MULTIPLICAR") {
    /* Enter 2 number */
    let number_1 = Number(prompt("Ingrese el primero numero "))
    let number_2 = Number(prompt("Ingrese el segundo numero "))

    multiplicacion = number_1 * number_2

    console.log(`El resultado de la suma entre ${number_1} y ${number_2} es ${multiplicacion}`)

} else if (operation_math == "DIVISION") {
    /* Enter 2 number */
    let number_1 = Number(prompt("Ingrese el primero numero "))
    let number_2 = Number(prompt("Ingrese el segundo numero "))

    division = number_1 / number_2

    console.log(`El resultado de la suma entre ${number_1} y ${number_2} es ${division}`)

} else {
    console.log("No se ejecuto ninguna operacion matematica")
}