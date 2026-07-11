/* Declarate "saludo" variable for display a Message */
saludo = "Hola Mundo"
console.log(saludo);


/* Declarate "edad" variable and storage a year */
edad = 21
console.log(edad);


/* Declarate a "estaSoleado" variable and storage Boolean value */
estaSoleado = Boolean(prompt("¿Esta soleado? "))

if (estaSoleado === true) {
    console.log("Esta soleado");
} else {
    console.log("No esta Soleado");
}


/* Declarate "valorNulo" variable and assign null value */
valorNulo = null
console.log(valorNulo);


/* Declarate "sinDefinir" variable without value */
let sinDefinir;
console.log(sinDefinir);


/* Declarate "numeroGrande" variable and assign big number use BigInt value */
numeroGrande = "123456789123456789"
bigNumber = BigInt(numeroGrande);
console.log(bigNumber);


/* Declarate "mensaje" variable and assign text "Aprendiendo JavaScript" use simple quotation marks */
mensaje = 'Aprendiendo JavaScript'
console.log(mensaje);


/* Declarate "precio" variable and assign decimal value as price of the article */
precio = 20.00
console.log(precio);


/* Declarate "estaLloviendo" variable and assign opposite value the "estaSoleado" variable */
estaLloviendo = Boolean(prompt("¿Esta lloviendo? "))

if (estaLloviendo === false) {
    console.log("No esta Lloviendo");
} else {
    console.log("Esta Soleado");
}


/* Declarate "temperatura" variable and assign negative number for show low zero temperature */
let temperatura = -4
console.log(temperatura)