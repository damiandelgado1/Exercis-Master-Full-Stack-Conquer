// A function received Array with duplicate elements
function removeDuplicates(arrDuplicate) {

    // Delete element duplicate
    const uniqueElement = arrDuplicate.filter((item, index) => arrDuplicate.indexOf(item) === index);

    // Create new Array with element without duplication
    return uniqueElement;
}

let duplicateElement = [1, 1, 2, 3, 4, 4, 4, 5, 5, 6, 7, 7, 7, 7];

let elementWithoutDuplication = removeDuplicates(duplicateElement);

console.log(elementWithoutDuplication);