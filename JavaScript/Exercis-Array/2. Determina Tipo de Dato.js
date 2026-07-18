{
    string: ["Hola que tal", "Paisa"];
    number: [55];
    object: [{}, {name: 'Bienve'}, [1, 2, 3], ["Hola que tal"]]
}

function porTipos(arr) {
    return {
        number: arr.filter(e => {return typeof e === "number"}),
        string: arr.filter(e => {return typeof e === "string"}),
        object: arr.filter(e => {return typeof e === "object"})
    }
}

console.log(porTipos(datosAleatorios))