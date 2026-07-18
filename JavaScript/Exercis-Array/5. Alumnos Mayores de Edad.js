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

function getAdultStudent(arr) {
    return arr.filter(student => student.edad >= 18);
}

console.log(getAdultStudent(alumnos));