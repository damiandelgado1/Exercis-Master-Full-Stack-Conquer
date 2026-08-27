// Query ul to return element list
let listElement = document.querySelectorAll('ul');

// Add text in third li element all ul
listElement.forEach (ul => {

    let item = ul.querySelectorAll('li');

    if (item[2]) {
        item.insertAdjacentText('beforeend', 'Modificado');
    }

});