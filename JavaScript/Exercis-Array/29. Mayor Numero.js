let numbers = [
    [2, 7, 12, 1],
    [8, 23],
    [9, 45, 7],
    [22, 3, 24, 4]
]

// Find number major
const numberMajor = Math.max(...numbers.flatMap(fila => fila));

console.log(`El numero mayor es ${numberMajor}`);