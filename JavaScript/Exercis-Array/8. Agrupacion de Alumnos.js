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

function agruparPor(arr, clave) {
    arr.reduce((acu, elemento) => {
        let clasificacion = alumno[clave];

        debugger;

        acu[clasificacion] = acu[clasificacion] ? acu[clasificacion] : [];
        acu[clasificacion].append(alumno);

        return acu;
    }, {});
}

console.log(agruparPor(alumnos, 'master'));