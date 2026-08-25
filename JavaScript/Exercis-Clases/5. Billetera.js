// Class manage movement of the money
class Movimiento {
    #description;
    #quantity;
    #date;
    #category;

    constructor(desc, quantity, date, category) {
        this.#description = desc;
        this.#quantity = quantity;
        this.#date = date;
        this.#category = category;
    }
}

// Class manage actions in a Wallet
class Wallet {
    #amount;
    #operations;

    constructor(amountInitial = 0) {
        this.#amount = amountInitial;
        this.#operations = [];
    }

    // Execute a movement
    addMovement(movement) {
        this.#operations.push(movement);

        if (movement.categoria == "Gasto") {
            this.#amount = this.#amount - movement.cantidad;
        } else {
            this.#amount = this.#amount - movement.cantidad;
        }
    }

    obtenerGastosPorMes(month) {
        return this.#operations.filter(operation => operation.date.getMonth() === month && category_operation === "Gasto");
    }
    
    obtenerGananciasPorMes(month) {
        return this.#operations.filter(operation => operation.date.getMonth() === month && operation.type === "Ganancia");
    }

    obtenerGastosPorCategoria(cat) {
        return this.#operations.filter(movement => movement.type === "Gasto" && movement.category === cat);
    }

    obtenerGananciasPorCategoria(cat) {
        return this.#operations.filter(operation => operation.date.getMonth() === month && operation.type === "Ganancia");
    }

    // Return money use in the Month
    calcularTotalPorMes(month) {
        return this.#operations.filter(movement => movement.date.getMonth() === month).reduce(
            (total, movement) => {
                if (movement.tipo === "Gasto") {
                    total = total - movement.quantity;
                } else {
                    total = total + movement.quantity;
                }

                return total;
            }
        )
    }

    // Return money by Category
    calcularTotalPorCategoria(category) {
        return this.#operations.filter(movement => movement.category === cat).reduce(
            (total, movement) => {
                if (movement.tipo === "Gasto") {
                    total = total - movement.quantity;
                } else {
                    total = total - movement.quantity;
                }

                return total;
            }
        )
    }
}

let wallet = new Wallet();

let number1 = new Movement(
    'Compra comida',
    100,
    new Date(2025, 2, 5, 0, 0, 0, 0),
    "Gasto",
    "Comida"
);

wallet.addMovement(number1);

console.log(wallet.obtenerGastosPorMes(1));
console.log(wallet.obtenerGananciasPorMes(1));
console.log(wallet.obtenerGastosPorCategoria);
console.log(wallet.obtenerGananciasPorCategoria(1));