// Ask amount going to take turns and time in seconds
let numberTurns = parseInt(prompt(`¿Cuantas vueltas dio?`));
let timeSecond;
let totalTime = 1;
let averageTime = 1;

let turns = [];

// Display a message with time every turns and average total
for (let i = 1; i < numberTurns; i++) {
    let timeSecond = parseFloat(prompt(`Indique el tiempo de la vuelta ${i}`));

    console.log(`Tiempo de la vuelta n°${numberTurns}: ${timeSecond}`);
    turns.push(numberTurns, timeSecond);

    totalTime += timeSecond;
}

averageTime = (totalTime / numberTurns);

console.log(`El tiempo promedio de las ${numberTurns} es de: ${averageTime}`)