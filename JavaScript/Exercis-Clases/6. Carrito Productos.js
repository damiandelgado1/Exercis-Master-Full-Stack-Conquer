// Class manage a Product
class Product {
    #id;
    #name;
    #price;
    #quantity;
    #tax

    static counter = 0;

    constructor(name, price, quantity, tax) {
        Product.counter++;

        this.#name = name;
        this.#price = price;
        this.#quantity = quantity;
        this.#tax = tax;
        this.#id = Product.counter;
    }

    // Return all value of the product
    get id() { return this.#id; }
    get name() { return this.#name; }
    get price() { return this.#price; }
    get quantity() { return this.#quantity; }
    get tax() { return this.#tax; }

    set quantity(quantityModify) {
        if (quantityModify <= 0) throw new Error(`La cantidad no debe ser 0`);

        this.quantity = quantityModify;
    }
}

// Class manage shopping cart with product
class ShopCart {
    #products = [];

    // Add new product in the shopping cart
    addProduct(product) {
        this.#products.push(product);
    }

    // Update quantity of product in the shopping cart
    updateQuantityProduct(id, quantity) {
        const product = this.#products.find(product => product.id === String(id));

        if (product) {
            product.quantity = quantity;
        }
    }

    // Delete a Product
    deleteProduct(id) {
        this.#products = this.#products.filter(product => product.id !== String(id));
    }

    // Calculate total the Product in the Cart
    calculateSubTotal() {
        this.total = this.#products.reduce((acumulador, actual) => acumulador + (actual.price * actual.quantity), 0);
    }

    // Calculate tax total of the product has tax
    calculateTaxTotal() {
        return this.#products.reduce((acumulador, product) => {
            const taxForItem = product.hasTax ? (product.price * 0.10) : 0;

            return acumulador + (taxForItem * product.quantity);
        }, 0);
    }

    calculateTotal() {
        return this.calculateSubTotal() + this.calculateTaxtTotal();
    }

    // Return quantity sub total of item the product
    returnQuantityTotal() {
        this.#products.reduce((acumulador, product) => acumulador + product.quantity, 0);
    }

    // Display list product, subtotal of the all product and total tax add
    toString() {
        let list = `Lista de Productos`;

        this.#products.forEach(product => {
            list += `${product.name}: ${product.price} x unidad (Cantidad: ${product.quantity}`;
        });

        const subTotal = this.calculateSubTotal();
        const taxs = this.calculateTaxtTotal();
        const total = this.calculateTotal();

        return `${list}` +
            `Sub Total sin Impuestos: ${subTotal.toFixed(2)}\n` +
            `Sub Total con Impuestos: ${taxs.toFixed(2)}\n` +
            `Total final: ${total.toFixed(2)}\n`;
    }
}