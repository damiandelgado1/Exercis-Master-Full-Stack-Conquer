/* Make 3 question */
let question1 = Boolean(prompt("¿Que lenguaje de Programacion sigue filosofia de Tipado Estatico?"))
let question2 = Boolean(prompt("¿Que tecnologia Frontend no es un framework sino una Libreria?"))
let question3 = Boolean(prompt("¿Que navegador web es open source?"))

/* If response is true congratulate */
if (question1 === "Java") {

    if (question2 === "React") {

        if (question3 === "Firefox") {
            console.log("Respuestas respondidas correctas")
        } else {
            console.log("Respuestas respondidas incorrectas")
        }

    }

}