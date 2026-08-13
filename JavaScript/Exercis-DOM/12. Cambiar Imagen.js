let imagenes = document.getElementsByTagName('img');

for (let i of imagenes) {
    if ( i.getAttribute('src') === "cambiar") {
        i.setAttribute('src', 'cambiado');
    }
}