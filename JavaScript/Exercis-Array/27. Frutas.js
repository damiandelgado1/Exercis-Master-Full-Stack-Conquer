let fruits = [];

// Enter fruits
let fruit1 = prompt(`Ingresa la primera fruta`);
let fruit2 = prompt(`Ingresa la segunda fruta`);
let fruit3 = prompt(`Ingresa la tercera fruta`);
let fruit4 = prompt(`Ingresa la cuarta fruta`);
let fruit5 = prompt(`Ingresa la quinta fruta`);

fruits.push(fruit1, fruit2, fruit3, fruit4, fruit5);

// Indicate the quantity of the Fruit search
let fruitSearch = prompt(`¿Que fruta busca?`);

const quantityFruit = fruits.filter(fruit => fruit === fruitSearch).length;

console.log(quantityFruit);