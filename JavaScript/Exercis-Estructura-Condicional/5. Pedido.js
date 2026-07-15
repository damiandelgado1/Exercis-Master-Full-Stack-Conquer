/* Ask step by step why Ingredients wanted User */
let ingredient_1 = prompt("Indique el primer ingrediente que quiere ")

if (ingredient_1 === "pan blanco" || ingredient_1 === "pan negro" || ingredient_1 === "pan integral" ) {

    let ingredient_2 = prompt("Indique el segundo ingrediente")

    if (ingredient_2 === "tomate" || ingredient_2 === "lechuga" || ingredient_3 === "pimiento") {

        console.log(`${ingredient_2} añadido`)

    } else if (ingredient_2 === '') {

        let ingredient_3 = prompt("El segundo ingrediente no fue añadido. Indique el tercer ingrediente ")

        if (ingredient_3 === "cebolla" || ingredient_3 === "aceituna" || ingredient_3 === "pepino") {

            console.log(`${ingredient_3} añadido`)

            let ingredient_4 = prompt("Indique el cuarto ingrediente ")

            if (ingredient_4 === "mostaza" || ingredient_4 === "mayonesa" || ingredient_4 === "picante") {

                
                console.log(`${ingredient_4} añadido`)
                
                let drink = prompt("Indique la Bebida")
                
                if (drink === "coca cola" || drink === "pepsi" || drink === "sprite") {
                    
                    console.log(`Bebida elegida ${drink}`)
                    console.log(`Pedido completado \n
                        El sandwich incluye: \n
                        ${ingredient_1},
                        ${ingredient_2},
                        ${ingredient_3},
                        ${ingredient_4},
                        ${drink}
                        `)

                } else {
                    console.log("El pedido esta incompleto")
                    console.log(`Pedido completado \n
                        El sandwich incluye: \n
                        ${ingredient_1},
                        ${ingredient_2},
                        ${ingredient_3},
                        ${ingredient_4},
                        ${drink}
                        `)
                }

            } else {
                console.log("El pedido esta incompleto")
                console.log(`Pedido completado \n
                        El sandwich incluye: \n
                        ${ingredient_1},
                        ${ingredient_2},
                        ${ingredient_3},
                        ${ingredient_4},
                        ${drink}
                        `)
            }

        } else {
            console.log("El pedido esta incompleto")
            console.log(`Pedido completado \n
                        El sandwich incluye: \n
                        ${ingredient_1},
                        ${ingredient_2},
                        ${ingredient_3},
                        ${ingredient_4},
                        ${drink}
                    `)
        }

    } else {
        console.log("El pedido esta incompleto")
        console.log(`Pedido completado \n
                    El sandwich incluye: \n
                    ${ingredient_1},
                    ${ingredient_2},
                    ${ingredient_3},
                    ${ingredient_4},
                    ${drink}
                `)
    }

} else {
    console.log("No hay pedido")
}