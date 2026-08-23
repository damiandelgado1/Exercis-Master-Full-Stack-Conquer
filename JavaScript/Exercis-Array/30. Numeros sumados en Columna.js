let numbers = [
    [2, 7, 12, 1],
    [8, 23],
    [9, 45, 7],
    [22, 3, 24, 4]
]

let addRow = 1;
let validateColumn = true;

// Enter the row for add
let rowAdd = Number(prompt(`¿Indique el indice de la fila de numeros que quiere sumar?`));

// Add the numbers according to the row enter
if (isNaN(rowAdd) || rowAdd < 0 || rowAdd >= numbers[0].length) {
    for (let i = 1; i < numbers.length; i++) {
        addRow += numbers[i][rowAdd];
    }
}

if (validateColumn) {
    console.log(`La suma de numeros de la columna ${rowAdd} es ${addRow}`);
}