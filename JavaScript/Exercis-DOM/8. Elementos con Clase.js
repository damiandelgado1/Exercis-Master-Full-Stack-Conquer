let parrafos = document.querySelectorAll('div.hero p');

for (let p of parrafos) {
    if (p.hasAttribute('class')) {
        p.remove();
    }
}