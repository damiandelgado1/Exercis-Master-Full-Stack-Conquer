// Insert div with "pepaino" class with border red
let addDiv = document.createElement('div');

addDiv.classList.add('pepaino');

addDiv.style.border = "2px solid red";

// Add 2 p element and assign class in p element
let addParrafo1 = document.createElement('p');
addParrafo1.textContent('pepaino');

let addParrafo2 = document.createElement('p');
addParrafo2.textContent('rojo');

addDiv.appendChild(addParrafo1);
addDiv.appendChild(addParrafo2);

document.body.appendChild(addDiv);