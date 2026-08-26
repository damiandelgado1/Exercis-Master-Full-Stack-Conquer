// Verify if div element has class attribute
let divElement = document.querySelectorAll('div');

// If div element has class attribute add container value
divElement.forEach(div => {

    if (divElement.hasAttribute('class')) {
        divElement.classList.add('container');
    }

})
