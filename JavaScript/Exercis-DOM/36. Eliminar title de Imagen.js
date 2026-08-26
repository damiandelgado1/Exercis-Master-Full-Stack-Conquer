// Query all element img with class img
let img = document.querySelector('img.img');

// Delete title attribute of the img element with class img
img.forEach(img => {
    img.removeAttribute('title');
});