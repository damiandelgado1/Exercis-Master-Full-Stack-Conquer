/* Enter a Number */
let number = Number(prompt("Ingresar un Numero "))

/* Comparate if the Number Enter is major or minor */
if ( number < 50 && number > 100 ) {
    console.log(`El numero ingresado que es ${number} esta dentro del rango`)
} else {
    console.log(`El numero ingresado que es ${number} no esta dentro del rango`)
}