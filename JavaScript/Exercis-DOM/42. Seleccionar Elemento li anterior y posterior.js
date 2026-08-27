// Query unorderedList
let allList = document.querySelector('ul');

allList.onbeforematch(ul => {

    // Select first and last child of ul element
    let firstElement = ul.firstElementChild('li');
    let lastElement = ul.lastElementChild('li');

    // Add color red
    if (firstElement && firstElement.previousElementSibling) {
        firstElement.previousElementSibling.style.color = "red";
    }

    if (lastElement && lastElement.previousElementSibling) {
        lastElement.nextElementSibling.style.color = "red";
    }
});