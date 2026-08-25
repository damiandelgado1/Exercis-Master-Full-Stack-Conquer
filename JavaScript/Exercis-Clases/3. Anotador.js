// A class with notes
class Note {

    notes = [];

    constructor(name) {
        this.name = name;
    }

    addNote(note) {
        this.notes.push(note);

        console.log(`Nueva nota ${notes}`);
    }

    updateNote(id, note) {
        this.notes[id] = note;
    }

    getNote(id) {
        return this.notes(id);
    }

    deleteNote(id) {
        this.notes.splice(id, 1);
    }

    deleteNote() {
        this.notes.reduce(
            (salida, note, index) => {
                return `${salida} \n${index}, ${note}`
            }, `${this.name} \n---\n`);
    }
}

let list = new Note(`Lista de la Compra`);

list.addNote('Leche');

console.log(list);