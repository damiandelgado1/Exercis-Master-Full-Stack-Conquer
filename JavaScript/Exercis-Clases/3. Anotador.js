// A class with notes
class Note {

    notes = [];

    constructor(name) {
        this.name = name;
    }

    // Add new note
    addNote(note) {
        this.notes.push(note);

        console.log(`Nueva nota ${notes}`);
    }

    // Update the stated a Note
    updateNote(id, note) {
        this.notes[id] = note;
    }

    // Return a note by ID
    getNote(id) {
        return this.notes(id);
    }

    // Delete a Note
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