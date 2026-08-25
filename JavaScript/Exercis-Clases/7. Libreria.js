// Class Autor with information about the Autor writer books
class Autor {
    #name;
    #nacionallity;

    constructor(name, nacionallity) {
        this.#name = name;
        this.#nacionallity = nacionallity;
    }

    // Method to get value of properly
    get name() { return this.#name };
    get nacionallity() { return this.#nacionallity };
}

// Class Book to manage book
class Book {
    #id;
    #name;
    #author;
    #price;
    #category;
    #stock;

    static counter = 0;

    constructor(name, author, price, category, stock) {
        Book.counter++;

        this.#name = name;
        this.#author = author;
        this.#price = price;
        this.#category = category;
        this.#stock = stock;
    }

    haveStock() {

        if (this.#stock > 0) {
            return true;
        } else {
            return false;
        }

    }

    get name() { return this.#name };
    get author() { return this.#author };
    get price() { return this.#price };
    get category() { return this.#category };
    get stock() { return this.#stock };

    set modifyStock(stock) {
        if (this.modifyStock < 0) throw new Error(`La cantidad no debe ser 0`);

        this.#stock = stock;
    }

    set modifyPrice(price) {
        if (this.modifyPrice < 0) throw new Error(`El precio no debe ser 0`);

        this.#price = price;
    }
}

// Class Library to perform actions
class Library {

    #books = [];
    #earnings = 0;

    // Method to add a Book
    add(book) {
        this.#books.push(book);
    }

    // Method to delete a Book
    delete(id) {
        this.#books = this.#books.filter(book => book.id !== id);
    }

    // Method to search a Book
    search(id) {
        return this.#books.find(book => book.id === id);
    }

    // Method to search a Book by name
    searchForName(name) {
        this.#books.find(book => book.author.name.toLowerCase() === name.toLowerCase());
    }

    // Filter Book by Author
    filterForAuthor(author) {
        this.#books.filter(book => book.author.name.toLowerCase() === author.toLowerCase());
    }

    // Filter Book by Category
    filterForCategory(category) {
        this.#books.filter(book => book.category.toLowerCase() === category.toLowerCase());
    }

    // Buy a Book
    buyBook(idBook) {
        idBook.forEach(id => {
            const book = this.search(id);

            if (book && book.haveStock()) {
                book.modifyStock = book.price;
            }
        });
    }

    // Return earnings
    get earning() {
        return this.#earnings;
    }
}

const name = prompt(`Ingresa el Nombre del Libro`);
const newBook = new Book(name, author, price, category, stock);

Library.add(newBook);