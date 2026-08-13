let listas = document.getElementsByTagName('ul');

for (let lista of listas) {
    if (lista.children.length === 2) {
        let newLi = document.createElement('li');

        newLi.textContent = 'Tercer elemento';
        lista.appendChild(newLi);
    }
}