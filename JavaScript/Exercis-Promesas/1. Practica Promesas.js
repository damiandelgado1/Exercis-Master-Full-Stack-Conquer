let p1 = new Promise((resolve, reject) => {
    resolve("La promesa se ha resuelto de forma correcta");
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("La promesa se ha resuelto de forma correcta");
    }, 10000);
});

let p3 = new Promise((resolve, reject) => {
    reject("La promesa no se ha resuelto de forma correcta");
});

p1.then((valor) => {
    console.log(`p1 me ha devuelto: `, valor);

    return p2;
}).then((valor2) => {
    console.log('Segundo then: ', valor2);

    return p3;
}).then((valor3) => {
    console.log('Tercer valor: ', valor3);

    return valor3;
}).catch((error) => {
    console.log(error);

}).finally(() => {
    console.log('Ejecutando finally');

});


let P1 = new Promise((resolve, reject) => {
    resolve("La promesa se ha resuelto de forma correcta");
});

let P2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("La promesa se ha resuelto de forma correcta");
    }, 10000);
});

P1.then((edad) => {

        if (edad => 18) {
            console.log('Acceso autorizado', edad);

            return Promise.resolve('Edad mayor a 18');
        } else {
            Promise.reject('Edad menor que 18');
        }

    }).then((clave) => {
        console.log('Creando clave', clave);

        return P2;

    }).catch((e) => {
        console.log('Ha ocurrido un error', e);

    }).finally(() => {
        console.log('Cerrando la conexion');

    });