let change_password = Boolean(prompt("¿Quiere cambiar la contraseña?"))

if (change_password === true) {

    let question1 = prompt("¿Cual es el framework Frontend que permite un desarrollo de interfaces estructurado?")

    if (question1 === "angular") {

        let question2 = prompt("¿Cual es la Tecnologia que permite autocompletado en VSCode al desarrollar codigo?")

        if (question2 === "github copilot") {

            let question3 = prompt("¿Cual es el lenguaje de programacion que domina el desarrollo bajo nivel?")

            if (question3 === "c") {

                let password_change = prompt("Ingrese la nueva contraseña")
                console.log("Contraseña cambiada")
            } else {
                console.log("Ninguna pregunta se respondio correctamente")
            }
        }
    }
}