let divs = document.getElementsByTagName('div');

for (let div of divs) {
    if (div.hasAttribute('class')) {
        div.classList.add("container");
    }
}