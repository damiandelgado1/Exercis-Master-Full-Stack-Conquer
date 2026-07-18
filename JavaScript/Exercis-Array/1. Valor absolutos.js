// function vAbsoluto(arr) {

//     let newArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(Math.abs(arr[i]));
//     }

//     return newArray;
// }

function vAbsoluto(arr) {
    return arr.map(e=> Math.abs(e));
}

const numbers = [1, 4, -5, -20, 8, 9, 3];

console.log(numbers);
console.log(vAbsoluto(numbers));