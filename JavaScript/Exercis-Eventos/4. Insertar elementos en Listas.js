let listasOrdenadas = document.getElementsByTagName('ol');

for (let lista of listasOrdenadas) {
    if (lista.children.length === 2) {
        let newLi = document.createElement('li');

        newLi.textContent = "Elemento intermedio";
        lista.insertBefore(newLi, lista.lastElementChild);
    }
}