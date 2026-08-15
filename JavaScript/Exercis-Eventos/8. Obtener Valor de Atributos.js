let primerspan2 = document.getElementById('primerspan2');

for (let attr of primerspan2.attributes) {
    console.log(`${attr.name} vale ${attr.value}`);
}