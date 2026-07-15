/* Request members if have quot daily or authorization */
let quota = Boolean(prompt("¿Tiene la cuota al Dia? "))
let authorization = Boolean(prompt("¿Tiene autorizacion? "))

/* If member has quot or authorization display confirm message */
if (quota === true && authorization == true) {
    console.log(`El mienbro si tiene la cuota al dia, acceso permitido`)
} else {
    console.log(`El mienbro no tiene la cuota al dia, acceso permitido`)
}