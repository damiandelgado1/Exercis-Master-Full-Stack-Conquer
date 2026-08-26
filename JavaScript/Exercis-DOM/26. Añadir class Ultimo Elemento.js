let parrafoClassAzul = document.querySelectorAll('p');

if (parrafoClassAzul > 0) {
    const ultimoParrafo = parrafos[parrafos.length - 1];

    ultimoParrafo.setAttribute('class', 'azul');
}
