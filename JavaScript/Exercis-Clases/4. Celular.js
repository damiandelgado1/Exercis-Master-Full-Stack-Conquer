class Celular {
    #contacts = [];
    #calls = [];

    addContact(contact) {
        const exist = this.#contacts.some(c => c.name === contact.name || c.number === contact.number);

        if (exist) {
            console.log(`El nombre o numero de contacto ya existe`);
        }

        this.#contacts.push(contact);
    }

    searchName(name) {
        return this.#contacts.find(c => c.name === name);
    }

    searchNumber(number) {
        return this.#contacts.find(c => c.number === number);
    }

    deleteContact(name) {
        const index = this.#contacts.findIndex(c => c.name === name);

        if (index !== -1 ) {
            this.#contacts.splice(index, 1);
        }
    }

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

        return this.#contacts.map(c => `Nombre ${c.name} - Numero: ${c.number}`).join(`\n`);
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