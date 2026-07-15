/* Request user a number and display in message the name month */
let day_month = Number(prompt("Ingresa el numero de dias de un Mes"))

switch (day_month) {
    case "28":
        console.log(`El mes de Febrero tiene ${day_month} dias`);

    case "30":
        console.log(`El mes de Abril, Junio, Septiembre y Novimebre tiene ${day_month} dias`);

    case "31":
        console.log(`El mes de Enero, Marzo, Mayo, Julio, Agosto, Octubre y Diciembre ${day_month} dias`)
}