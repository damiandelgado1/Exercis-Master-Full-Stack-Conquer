/* Request year station and displya a date started and finished */
let station_year = prompt("Indique la Estacion del Año ")

/* Show started and end day of this station */
switch (station_year) {
    case "Otoño":
        console.log(`La estacion de ${station_year} empieza entre los dias 21 de Junio`)

    case "Invierno":
        console.log(`La estacion de ${station_year} empieza entre los dias 20 y 21 de Marzo`)

    case "Primavera":
        console.log(`La estacion de ${station_year} empieza entre los dias 22 y 23 de Septiembre`)

    case "Verano":
        console.log(`La estacion de ${station_year} empieza entre los dias 1 de Diciembre`)
}