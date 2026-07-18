const alumnos = [
    {
        nombre: "pedro",
        edad: 18,
        master: "FullStack"
    },
    {
        nombre: "marcos",
        edad: 21,
        master: "IA"
    },
    {
        nombre: "lucas",
        edad: 13,
        master: "FullStack"
    },
    {
        nombre: "juan",
        edad: 24,
        master: "Mobile"
    },
    {
        nombre: "mateo",
        id: 35,
        master: "FullStack"
    }
]

function mayor(arr) {
    debugger;

    return arr.reduce((acumulador, alumno) => {
        if (alumno.edad > acumulador.edad) {
            return alumno;
        }

        return acumulador;
    }, arr[0])
}

console.log(mayor(alumnos));