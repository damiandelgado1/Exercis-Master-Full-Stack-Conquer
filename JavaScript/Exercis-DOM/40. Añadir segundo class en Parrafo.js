// Query all p element with class "preparado"
let parrafo = document.querySelectorAll('p');

// Add second class "porelasterisco"
parrafo.forEach(parrafo => {

    if (parrafo.classList.contains('.preparado')) {
        parrafo.classList.add('porelasterisco');
    }

});