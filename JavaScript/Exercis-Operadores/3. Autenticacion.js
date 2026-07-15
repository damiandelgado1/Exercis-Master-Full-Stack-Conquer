/* Request enter User and Password */
let user = prompt("Ingresar usuario ")
let password = prompt("Ingresar password ")

autorizated_user = "user123"
password_user = "user123"

/* Comparate user and password with data in variable and Display message if has autorizated access */
if ( user == authorized_user && password == password_user ) {
    console.log(`El usuario ${user} tiene acceso autorizado`)
} else {
    console.log("El usuario no tiene acceso autorizado")
}