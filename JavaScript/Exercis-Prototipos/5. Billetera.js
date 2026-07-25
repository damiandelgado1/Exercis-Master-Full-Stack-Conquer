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
    #operaciones;

    constructor(montoInicial=0) {
        this.#monto = montoInicial;
        this.#operaciones = [];
    }
    
    agregarMovimiento(movi) {
        this.#operaciones.push(movi);

        if (movi.categoria == 'GASTO') {
            this.#monto = this.#monto - movi.cantidad;
        } else {
            this.#monto = this.#monto - movi.cantidad;
        }
    }

    obtenerGastosPorMes(mes) {
        return this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes && operacion_categoria === "Gasto");
    };

    obtenerGananciasPorMes(mes) {
        return this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes && operacion.tipo === "Ganancia");
    }

    obtenerGastosPorCategoria(cat) {
        return this.#operaciones.filter(movimiento => movimiento.tipo === "Gasto" && movimiento.categoria === cat)
    }

    obtenerGananciasPorCategoria(cat) {
        return this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes && operacion.tipo === "Ganancia");
    }

    calcularTotalPorMes(mes) {
        return this.#operaciones.filter(movimiento => movimiento.fecha.getMonth() === mes).reduce(
            (total, movimiento) => {
                if (movimiento.tipo === "Gasto") {
                    total = total - movimiento.cantidad
                } else {
                    total = total + movimiento.cantidad
                }

                return total;
            }
        )
    }

    calcularTotalPorCategoria(cat) {
        return this.#operaciones.filter(movimiento => movimiento.categoria === cat).reduce(
            (total, movimiento) => {
                if (movimiento.tipo === "Gasto") {
                    total = total - movimiento.cantidad
                } else {
                    total = total - movimiento.cantidad
                }

                return total;
            }
        )
    }
}

let cartera = new Wallet();

let n1 = new Movimiento(
    'Compra comida',
    150,
    new Date(2024, 2, 5, 0, 0, 0, 0),
    "Gasto",
    "Comida"
);

let n1 = new Movimiento(
    'Compra comida',
    150,
    new Date(2024, 2, 5, 0, 0, 0, 0),
    "Gasto",
    "Comida"
);

billetera.agregarMovimiento(n1);

console.log(billetera.obtenerGastosPorMes(1));
console.log(billetera.obtenerGananciasPorMes(1));
console.log(billetera.obtenerGastosPorCategoria(1));
console.log(billetera.obtenerGananciasPorCategoria(1));