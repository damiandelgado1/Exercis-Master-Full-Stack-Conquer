/* Enter address including street, number, apartment, postal code, city and country */
let street = prompt("Ingresa tu Calle ");
let number = Number(prompt("Ingresa el Numero de calle "));
let apartment = Number(prompt("Ingresa tu Apartamento "));
let postal_code = Number(prompt("Ingresa tu Codigo Postal "));
let city = prompt("Ingresa tu Ciudad ");
let country = prompt("Ingresa tu Pais ");

/* Show information address of the User */
console.log(`Datos de la direccion del Usuario\n
    ${street}\n
    ${number}\n
    ${apartment}\n
    ${postal_code}\n
    ${city}\n
    ${country}\n
    `)