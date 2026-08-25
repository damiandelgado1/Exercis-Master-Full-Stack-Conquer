class Movimiento {
    #descripcion;
    #cantidad;
    #fecha;
    #categoria;

    constructor(desc, cantidad, fecha, categoria) {
        this.#descripcion = desc;
        this.#cantidad = cantidad;
        this.#fecha = fecha;
        this.#categoria = categoria;
    }
}

class Wallet {
    #monto;
    #operations;

    constructor(montoInicial = 0) {
        this.#monto = montoInicial;
        this.#operations = [];
    }

    addMovement(movement) {
        this.#operations.push(movement);

        if (movement.categoria == "Gasto") {
            this.#monto = this.#monto - movement.cantidad;
        } else {
            this.#monto = this.#monto - movement.cantidad;
        }
    }

    obtenerGastosPorMes(month) {
        return this.#operations.filter(operacion => operacion.fecha.getMonth() === mes && operacion_categoria === "Gasto");
    }
    
    obtenerGananciasPorMes(month) {
        return this.#operations.filter(operacion => operacion.fecha.getMonth() === mes && operacion.tipo === "Ganancia");
    }

    obtenerGastosPorCategoria(cat) {
        return this.#operations.filter(movement => movement.tipo === "Gasto" && movement.categoria === cat);
    }

    obtenerGananciasPorCategoria(cat) {
        return this.#operations.filter(operacion => operacion.fecha.getMonth() === mes && operacion.tipo === "Ganancia");
    }

    calcularTotalPorMes(mes) {
        return this.#operations.filter(movement => movement.fecha.getMonth() === mes).reduce(
            (total, movement) => {
                if (movement.tipo === "Gasto") {
                    total = total - movement.cantidad;
                } else {
                    total = total + movement.cantidad;
                }

                return total;
            }
        )
    }

    calcularTotalPorCategoria(categoria) {
        return this.#operations.filter(movement => movement.categoria === cat).reduce(
            (total, movement) => {
                if (movement.tipo === "Gasto") {
                    total = total - movement.cantidad;
                } else {
                    total = total - movement.cantidad;
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