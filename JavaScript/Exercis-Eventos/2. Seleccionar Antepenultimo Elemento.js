let divs = document.getElementsByTagName('div');

for (let div of divs) {
    let parrafosDelDiv = div.getElementsByTagName('p');

    if (parrafosDelDiv.length >= 3) {
        let penultimoParrafo = parrafosDelDiv(parrafosDelDiv.length - 2);
        penultimoParrafo.classList.toggle('portatil');
    }
}