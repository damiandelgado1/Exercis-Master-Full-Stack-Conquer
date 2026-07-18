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

function porTipos(arr) {
    arr.reduce((acumulador, elemento) => {
        let tipo = typeof elemento;

        acumulador[tipo] = acumulador[tipo] ? acumulador[tipo] : [];
        acumulador[tipo].push(elemento);

        return acumulador
    }, {});
}

console.log(porTipos(datosAleatorios));