/* Ask if car have water, oil and tires */
let tiene_agua = Boolean(prompt("El auto tiene agua "))
let tiene_aceite = Boolean(prompt("El auto tiene aceite "))
let tiene_neumatico = Boolean(prompt("El auto tiene neumatico "))

/* Display message if has to do maintain or not */
if (tiene_agua === true && tiene_aceite === true && tiene_neumatico === tiene_neumatico) {
    console.log("El auto esta en perfecto estado");
} else {
    console.log("El auto necesita mantenimiento");
}