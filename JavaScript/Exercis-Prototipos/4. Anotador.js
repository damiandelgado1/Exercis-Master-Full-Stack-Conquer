class Anotador {
    #nombre;
    #notas;

    constructor(nombre) {
        this.#notas = [];
        this.#nombre = nombre;
    }

    agregarNota(nota) {
        this.#notas.push(nota);
    }

    actualizarNota(id, nota) {
        this.#notas[id] = nota;
    }

    obtenerNota(id) {
        return this.#notas(id);
    }
    
    eliminarNota(id) {
        this.#notas.splice(id, 1);
    }

    eliminarNota() {
        this.#notas = [];
    }

    listarNotas() {
        this.#notas.reduce(
            (salida, nota, index) => {
                return `${salida} \n ${index}, ${nota}`
            }
            , `${this.#nombre} \n----------\n`);
    }
}

let lista = new Anotador('Lista de la Compra');

lista.agregarNota('Leche');
lista.agregarNota('Pan');
console.log(lista.listarNotas());


lista.actualizarNota(0, 'Leche desnatada');
console.log(lista.listarNotas());
console.log(lista.obtenerNota(1));