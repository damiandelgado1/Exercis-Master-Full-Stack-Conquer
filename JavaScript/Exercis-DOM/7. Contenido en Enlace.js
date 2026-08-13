let segundoP = document.getElementsByTagName('p')[1];
let newA = document.createElement('a');

newA.setAttribute("href", "https://www.google.com");
newA.textContent = "aqui";

segundoP.appendChild(newA);