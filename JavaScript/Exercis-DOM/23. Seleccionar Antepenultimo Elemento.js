// Select antlast p of the div
let parrafoDeDiv = document.querySelectorAll('div p');

// If element p has class, delete
if (parrafoDeDiv.length >= 3) {

    // If not element p has class, asign
    let antePenultimoParrafo = parrafoDeDiv[parrafoDeDiv.length - 2];

    // Add class "portatil" in antelast p
    antePenultimoParrafo.classList.toggle('portatil');
}