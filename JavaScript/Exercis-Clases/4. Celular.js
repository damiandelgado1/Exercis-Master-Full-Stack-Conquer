// Class manage contacts in the Phone
class Celular {
    #contacts = [];
    #calls = [];

    // Add new contact in the Phone
    addContact(contact) {
        const exist = this.#contacts.some(contact => contact.name === contact.name || contact.number === contact.number);

        if (exist) {
            console.log(`El nombre o numero de contacto ya existe`);
        }

        this.#contacts.push(contact);
    }

    // Search a contact for name
    searchName(name) {
        return this.#contacts.find(contact => contact.name === name);
    }

    // Search a number of the Contact
    searchNumber(number) {
        return this.#contacts.find(contact => contact.number === number);
    }

    // Delete a contact of the Phone
    deleteContact(name) {
        const index = this.#contacts.findIndex(contact => contact.name === name);

        if (index !== -1 ) {
            this.#contacts.splice(index, 1);
        }
    }

    // Call a contact by the Name
    call(name) {
        const contact = this.searchName(name);

        if (contact) {
            const register = `Llamada a ${contact.name} con numero ${contact.number} realizada`;

            this.#calls.push(register);
        } else {
            console.log(`No se pudo realizar la llamada. ${name} no esta en los contactos`);
        }
    }

    verContact() {
        if (this.#contacts.length === 0) return "No hay contactos guardados";

        return this.#contacts.map(contact => `Nombre ${contact.name} - Numero: ${contact.number}`).join(`\n`);
    }

    verHistorial() {
        if (this.#calls.length === 0) return `No hay llamadas registradas`;

        return this.#calls.join(`\n`);
    }
}

const celular = new Celular();

celular.addContact({name: "Andres", number: "123456789"});

console.log(celular.verContact());

celular.call('Andres');

console.log(celular.verHistorial());