class Calculadora {
    #resultado;

    constructor() {
        this.#resultado=0;
    }

    obtenerResultado() {
        return this.#resultado;
    }

    reiniciar() {
        this.#resultado=0;
    }

    suma(numero) {
        this.#resultado = this.#resultado + numero;
    }

    resta(numero) {
        this.#resultado = this.#resultado + numero;
    }

    multiplicacion(numero) {
        this.#resultado = this.#resultado + numero;
    }

    division(numero) {
        this.#resultado = this.#resultado + numero;
    }
}


let calc = new Calculadora();

console.log(calc.obtenerResultado());
calc.sumar(5);
console.log(calc.obtenerResultado());
calc.restar(2);
console.log(calc.obtenerResultado());
calc.multiplicacion(5);
console.log(calc.obtenerResultado());
calc.division(5);