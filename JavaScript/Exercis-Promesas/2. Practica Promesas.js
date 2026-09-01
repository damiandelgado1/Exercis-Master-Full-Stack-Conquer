const promise1 = Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Se ha ejecutado la promesa 1');
});

const promise2 = Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Se ha ejecutado la promesa 2');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Se ha ejecutado la promesa 3');
});


promise1.then(valor => {
    return promises2;

}).then(valor2 => {
    console.log('valor 2', valor2);
    return promise3;

}).then(valor3 => {
    console.log('valor 3', valor3);

}).catch(error => {
    console.error('Error', error);

}).finalli(() => {
    console.log('Finaly');

});


// Example Promise all and race
// Promise.all(promise1, promise2, promise3)
//     .then((valorRetornado) => console.log(valorRetornado))
//     .catch((error) => console.error('Alguna promesa ha sido rechazada', error));

// Promise.race([promise1, promise2, promise3])
//     .then((valor) => console.log('all', valor))
//     .catch((error) => console.error('error', error));

Promise.any([promise1, promise2, promise3])
    .then(valor => console.log('allSettled', valor))
    .catch(error => console.error('Error', error));

Promise.allSettled([promise1, promise2, promise3]).then((valor) => 
    console.log('allSettled', valor)
);


let name = 'Andres';

const buscarUsuario = (nombre) => 

    new Promise((resolve, reject) => {
    console.log('Buscando usuario con el Nombre', name);

    let user = {
        name: 'Andres',
        dni: 123456789,
        edad: 19
    };

    resolve(user);
});

buscarUsuario.then((user) => console.log(user));


const buscarActividad = (user, fechaActual) => new Promise((resolve, reject) => {

    const actions = {
        user: user,
        activities: [
        ],
    };

    resolve(actions);
});


buscarUsuario('Andres').then(
    user => {
        console.log('El usuario que se ha encontrado es', user);

        return buscarActividad(user, new Date());
    }
)
.then(
    activities => console.log(activities)
)