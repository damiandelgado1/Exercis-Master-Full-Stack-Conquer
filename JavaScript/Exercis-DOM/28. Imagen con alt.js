// Query all img element
let imgElement = document.querySelectorAll('img');

// Return alt attribute of the last image element
if (imgElement.length > 0) {
    const ultimaImg = imgElement[imgElement.length - 1];

    const altAttributeImg = ultimaImg.getAttribute('alt');

    console.log(altAttributeImg)
}