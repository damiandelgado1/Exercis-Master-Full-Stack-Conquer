class Auto {
    #encendido;
    #velocidad;
    #marca;
    #modelo;
    #patente;

    constructor(marca, modelo, patente) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#patente = patente;
        this.#velocidad = 0;
        this.#encendido = false;
    }

    arrancar() {
        this.#encendido = true;
    }

    apagar() {
        if (this.#velocidad !== 0) {
            this.#velocidad = false;
        } else {
            console.info('El vehiculo va mayor a 0 km');
        }
    }

    acelerar() {
        if (this.#encendido) {
            this.#velocidad = this.#velocidad + 10;
        } else {
            console.info('El auto esta encendido');
        }
    }

    desacelerar() {
        if (this.#encendido) {
            if (this.#velocidad > 0) {
                this.#velocidad = this.#velocidad - 10;

                if (this.#velocidad < 0) {
                    this.#velocidad = 0;
                }
            } else {
                console.info('El auto no puede desacelerar porque no esta encendido');
            }
        } else {
            console.info('El auto esta encendido');
        }
    }

    toString() {
        return `${this.#marca} ${this.#modelo}, patente ${this.patente}`;
    }
}


let auto = new Auto("Mclaren", "750S", "1234");
console.log(coche.toString());

auto.arrancar();
auto.acelerar();

console.log(auto);