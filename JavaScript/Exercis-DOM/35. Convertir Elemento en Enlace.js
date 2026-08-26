// Return first element of the list
let element = document.querySelector('li');

// Convert element in a link
if (element) {
    element.outerHTML = element.outerHTML.replace(/^<li/, '<a').replace(/<\/li>$/, '</a>');
}