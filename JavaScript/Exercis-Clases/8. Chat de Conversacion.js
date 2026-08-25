// Class User with name of the User
class User {
    #id;
    #name;

    static counter = 0;

    constructor(id, name) {
        counter++;

        this.#id = String(User.counter);
        this.#name = name;
    }

    get id() { return this.#id };
    get name() { return this.#name };
}

// Class Message with properly of the message
class Message {
    #sender;
    #addresses;
    #text;
    #date;

    constructor(sender, addresses, text, date) {
        this.#sender = sender;
        this.#addresses = addresses;
        this.#text = String(text);
        this.#date = new Date();
    }

    get sender() { return this.#sender };
    get addresses() { return this.#addresses };
    get text() { return this.#text };
    get date() { return this.#date };
}

// Class Chat to perform action to Conversation
class Chat {
    #user;
    #contacts = [];
    #message = [];

    constructor(user) {
        this.#user = user;
    }

    // Add a new contact to Contacts
    addContact(user) {
        this.#contacts.push(user);
    }

    // Return a contact in the Contact list
    returnContacts() {
        return this.#contacts;
    }

    // Return a message in the Message list
    returnMessage() {
        return this.#message;
    }

    // Filter a message of the Contact
    filterForContact() {
        return this.#message.filter(message => message.addresses.id === String(id));
    }

    // Filter a message of the Date
    filterForMessage() {
        const filterDate = new Date(dateToFilter);

        return this.#message.filter(message => {
            const messageDate = message.date;

            return messageDate.getFullYear() === filterDate.getFullYear() &&
                    messageDate.getMonth() === filterDate.getMonth() &&
                    messageDate.getDate() === filterDate.getDate();
        });

    }

    // Send to message
    sendMessage() {
        const contactExist = this.#contacts.some(contact => contact.id === message.addresses.id);

        if (!contactExist) {
            throw new Error(`No se puede enviar mensaje a un usuario que no esta en la Lista de Contactos`);
        }

        const messageExists = this.#message.includes(message);

        if (!messageExists) {
            this.#message.push(message);
        }
    }
}

const user1 = new User(`Andres`);
const user2 = new User(`Pedro`);
const user3 = new User(`Juan`);

const chat = new Chat(user1);

chat.addContact(user2);

console.log(`Numero de ${user1} ${user1.id}`);

const message = new Message(user1, user2, `Hola`);
chat.sendMessage(message);