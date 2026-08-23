// A function received a Word
function removeWords(text, words) {

    // Delete all word indicate in Array
    for (let word of words) {
        text = text.replaceAll(word.trim(), "");
    }

    // Return new Text
    return text.replace(/\s+/g, " ").trim();
}

let text = Text(prompt(`Ingresa un texto`));

let word = prompt(`Indica las palabras a eliminar`);

words = word.split(",");

let result = removeWords(text, words);

console.log(result);