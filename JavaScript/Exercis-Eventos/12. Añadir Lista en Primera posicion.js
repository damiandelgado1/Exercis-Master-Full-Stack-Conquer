let newLi = document.createElement('li');
newLi.textContent = "Hola soy nuevo";

let lista = document.querySelector('ul');
lista.insertBefore(newLi, lista.firstElementChild);