// A function received a Array with Number
function getBigNumber(arrayNumber) {
    
    // Find the major number in Array
    const numberMajor = Math.max(...arrayNumber);

    console.log(`El numero mayor es ${numberMajor}`);
    return numberMajor;
}

let numbers = [3, 2, 6, 7, 4, 8, 9, 1];

let majorNumber = getBigNumber(numbers);

console.log(majorNumber);