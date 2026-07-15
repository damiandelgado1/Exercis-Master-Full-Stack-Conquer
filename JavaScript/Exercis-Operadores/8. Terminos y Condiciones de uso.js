/* Ask if user accept terms and conditions */
let confirmar = Boolean(prompt("¿Acepta terminos y condiciones? "))

/* If answer accept terms and conditions continue, if not say can't continue*/
if (confirmar === true) {
    console.log("Continuando con el proceso...")
} else {
    console.log("No se puede continuar con el proceso si no se aceptan los terminos y condiciones de uso")
}