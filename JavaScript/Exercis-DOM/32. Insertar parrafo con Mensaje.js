// Return div element with id
let divs = document.querySelector('#parrafos');

// Insert p element with message
if (divs) {
    const parrafos = document.querySelector('p');

    if (parrafos) {
        parrafos.insertAdjacentHTML('afterend', '<p> Hola soy el uno y medio </p>');
    }
}