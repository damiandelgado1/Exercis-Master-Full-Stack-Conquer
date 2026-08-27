// Query span element is child of p element
let span = document.querySelector('div.padre > p > span');

// Query p has span element and is child of div element
span.forEach(span => {
    let parrafo = span.parentElement;
    let divPadre = span.parentElement;

    divPadre.style.backgroundColor = "blue";
});