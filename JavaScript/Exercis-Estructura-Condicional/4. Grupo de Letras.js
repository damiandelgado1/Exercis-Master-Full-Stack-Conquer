/* Enter a letter */
let letter = prompt("Ingresa una letra")

group_a = [a, e, i, o, u]
group_b = [b, c, d, f, g]
group_c = [h, j, k, l, m]
group_d = [n, p, q, r]
group_e = [s, t, v, w, x, y, z]

/* According to letter enter say the Group belongs */
if (letter in group_a) {
    console.log(`La letra ${letter} ingresada pertenece al grupo A`)
} else if (letter in group_b) {
    console.log(`La letra ${letter} ingresada pertenece al grupo B`)
} else if (letter in group_c) {
    console.log(`La letra ${letter} ingresada pertenece al grupo C`)
} else if (letter in group_d) {
    console.log(`La letra ${letter} ingresada pertenece al grupo C`)
} else if (letter in group_e) {
    console.log(`La letra ${letter} ingresada pertenece al grupo C`)
} else {
    console.log(`La letra ingresada no pertenece a ningun grupo`)
}