const array1 = [2, 3, 5, 9, 12, 15];
const array2 = [4, 6, 9, 12, 18, 20];

const newArray = array1.concat(array2);

const noMultiplos = newArray.filter(n => n%3 === 0 && n%5 !== 0);
console.log(noMultiplos);