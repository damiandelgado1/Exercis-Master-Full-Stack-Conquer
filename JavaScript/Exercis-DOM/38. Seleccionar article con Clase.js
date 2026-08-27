// Query set article element
let articleProduct = document.querySelector('.product article');

// Select article element with "offer" class
articleProduct.forEach (articleProduct => {

    if (articleProduct.classList.contains('oferta')) {

        // Enter value in "data-iva" attribute
        articleProduct.dataset.iva = "0";
    }
});

