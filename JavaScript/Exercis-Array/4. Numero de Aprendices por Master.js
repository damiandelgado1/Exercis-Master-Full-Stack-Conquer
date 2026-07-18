const alumnos = [
    {
        nombre: "pedro",
        id: 1,
        master: "FullStack"
    },
    {
        nombre: "marcos",
        id: 2,
        master: "IA"
    },
    {
        nombre: "lucas",
        id: 3,
        master: "FullStack"
    },
    {
        nombre: "juan",
        id: 4,
        master: "Mobile"
    },
    {
        nombre: "mateo",
        id: 5,
        master: "FullStack"
    }
]

function nAprendicesFullStack(arr) {
    return {
        FullStack: arr.filter(student => student.master === "FullStack").length,
        IA: arr.filter(student => student.master === "IA").length,
        Mobile: arr.filter(student => student.master === "Mobile").length
    }
}

function nAprendicesFullStackReduce(arr) {
    return arr.reduce((acumulador, student) => {
        let master = student.master;

        if (acumulador[master] != undefined) {
            acumulador[master] = acumulador[master] + 1;
        } else {
            acumulador[master] = 1;
        }

        acumulador[master] = acumulador[master] != undefined ? acumulador[master] + 1 : 1;
        return acumulador;
    }, {});
}

console.log(nAprendicesFullStack(alumnos))