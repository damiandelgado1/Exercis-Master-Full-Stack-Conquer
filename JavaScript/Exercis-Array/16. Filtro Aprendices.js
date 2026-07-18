const aprendices = [
    { nombre: "Elena", edad: 20, calificaciones: [10, 90, 87] },
    { nombre: "Daniel", edad: 22, calificaciones: [78, 92, 87] },
    { nombre: "Miguel", edad: 19, calificaciones: [75, 88, 91] },
    { nombre: "Ana", edad: 18, calificaciones: [82, 79, 90] },
    { nombre: "Andres", edad: 21, calificaciones: [88, 85, 89] },
    { nombre: "Andres", edad: 17, calificaciones: [76, 84, 80] },
    { nombre: "Andres", edad: 23, calificaciones: [91, 9, 94] },
]

const aprendicesMayoresDeEdad = aprendices.filter(aprendices => aprendices.edad >= 18);
console.log(aprendicesMayoresDeEdad);