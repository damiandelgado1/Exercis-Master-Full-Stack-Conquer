let lista = querySelector('ul');
let primerHijo = lista.firstElementChild;

let newA = document.createElement('a');

newA.textContent = primerHijo.textContent;

lista.insertBefore(newA, primerHijo);

primerHijo.remove();