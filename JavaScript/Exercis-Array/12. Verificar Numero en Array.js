let numbers = [1, 2, 3, 4, 5, 6, 7];

let userNumber = parseInt(prompt("Introduce un Numero"));

if (numbers.includes(userNumber)) {
    console.log("El numero esta en el Array")
} else {
    console.log("El numero no esta en el Array")
}