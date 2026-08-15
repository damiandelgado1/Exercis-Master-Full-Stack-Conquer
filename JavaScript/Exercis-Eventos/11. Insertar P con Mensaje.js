let parrafos = document.getElementById('parrafos');
let newP = document.createElement('p');

newP.textContent = "Soy el tres";
parrafos.insertBefore(newP, parrafos.lastElementChild);