// Select li element with 2 element
let listElement = document.querySelectorAll('ol');

// If li elemento has 2 element, insert other element
orderedLists.forEach(ol => {

    if (ol.children.lenght === 2) {
        const newLi = document.createElement('li');

        newLi.innerHTML = '<p> parrafo 4 </p>';

        ol.insertBefore(newLi, ol.children[1]);
    }
});