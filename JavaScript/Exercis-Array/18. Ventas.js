const ventas = [
    { producto: "Camiseta", cantidad: 10, precioUnitario: 15},
    { producto: "Zapatos", cantidad: 5, precioUnitario: 50},
    { producto: "Sombrero", cantidad: 8, precioUnitario: 20},
    { producto: "Pantalones", cantidad: 12, precioUnitario: 30},
    { producto: "Bufanda", cantidad: 15, precioUnitario: 10}
]

const ventasElevadas = ventas.filter(venta => venta.cantidad > 8);
const totalIngresos = ventas.map(venta => {
    return {
        ...venta,
        subtotal: venta.cantidad * venta.precioUnitario
    }
});

const mayorVenta = totalIngresos.reduce((ventaMayor, venta) => {
    if (venta.subtotal > ventaMayor.subtotal) return venta;

    return ventaMayor;
}, totalIngresos[0])

console.log(totalIngresos);
console.log(mayorVenta);

const ventasOrdenadas = ventas.sort((a, b) => a.cantidad - b.cantidad);
console.log(ventasOrdenadas)