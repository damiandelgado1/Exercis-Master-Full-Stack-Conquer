let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map(n => n * 2);

let sumNumbers = doubleNumbers.reduce((suma, n) => {
    return suma + n;
}, 0);

console.log(sumNumbers);