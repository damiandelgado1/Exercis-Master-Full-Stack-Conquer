let imagenes = document.querySelectorAll('img.img');

for (let img of imagenes) {
    img.removeAttribute('title');
}