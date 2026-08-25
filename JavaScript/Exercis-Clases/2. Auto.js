// Create Auto class
class Auto {

    constructor(marca, modelo, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.encendido = false;
        this.patente = patente
        this.velocidad = 0;
    }

    arrancar() {
        this.encendido = true;
    }

    apagar() {
        this.encendido = false;
        this.velocidad = 0;
    }

    acelerar() {
        this.velocidad+= 10;
    }

    desacelerar() {
        this.velocidad -= 10;
    }

    toString() {
        console.log(`${marca} ${modelo} ${patente}`);
    }
}

let actionCar = prompt(`Indique la accion a hacer en el Auto`);

const car = new Auto("Lamborghini", "Revuelto", "123456");

if (actionCar == "arrancar") {
    car.arrancar();
} else if (actionCar == "apagar") {
    car.apagar();
} else if (actionCar == "acelerar") {
    car.acelerar();
} else if (actionCar == "desacelerar") {
    car.desacelerar();
}

console.log(car);