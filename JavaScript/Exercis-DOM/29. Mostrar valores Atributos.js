// Request element with text "Hola"
let element = document.querySelectorAll('saludo');

// Display attribute one to one
if (element) {
    for (let attributes in element.Attributes) {
        console.log(`Atributo: ${attributes.name} ${attributes.value}`);
    }
}