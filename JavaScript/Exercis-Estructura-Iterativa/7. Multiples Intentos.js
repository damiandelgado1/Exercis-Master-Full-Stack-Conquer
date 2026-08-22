// Enter user and password
let user = prompt(`Ingresa el usuario`);
let password = prompt(`Ingresa la contraseña`);

let attempts = 3;

// Allow 3 attempts to Enter user and password
while (attempts < 4) {

    // Validate if user and password is correct
    if (user == "mateo" && password == "mateo123") {
        console.log(`Usuario y Contraseña validos`);
    } else {
        console.log(`El usuario y contraseña no son validos`);
    }
}