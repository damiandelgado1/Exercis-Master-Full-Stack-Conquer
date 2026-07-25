class Television {
    #encendido = false;
    #canal = 0;
    #canales;
    #volumen = 0;
    #marca;

    constructor(marca, canales) {
        this.#marca = marca;
        this.#canales = canales;
    }

    encender() {
        this.#encendido = true;
    }

    apagar() {
        this.#encendido = false;
    }

    verCanalSiguiente() {
        if (this.#encendido) {
            this.#canal = this.#canal + 1;
        } else {
            console.log('El televisor esta encendido');
        }
    }

    verCanalAnterior() {
        if (this.#encendido) {
            if (this.#canal === 100) {
                this.#canal = 0;
            } else {
                this.#canal = this.#canal + 1;
            }
        } else {
            console.log('El televisor esta encendido');
        }
    }

    cambiarCanal() {
        if (this.#encendido) {
            if (canal <= 10 && canal >= 0) {
                this.#canal = canal;
            } else {
                console.log('El televisor no esta encendido');
            }
        } else {
            console.log('El televisor esta encendido');
        }
    }

    subirVolumen() {
        if (this.#encendido) {
            if (this.#volumen === 100) {
                console.log(`Esta con el volumen al maximo`)
            } else {
                this.#volumen = this.#volumen + 1;
            }
        } else {
            console.log('El televisor esta encendido');
        }
    }

    bajarVolumen() {
        if (this.#encendido) {
            this.#canal = this.#canal + 1;
        } else {
            console.log('El televisor esta encendido');
        }
    }

    toString() {
        return `Televisor ${this.marca} \n - Canales: ${this.#canales} \n - Canal actual: ${this.#canal} \n - Volumen actual: ${this.#volumen}`;
    }
}


let television = new Television("Samsung", "23");
console.log()