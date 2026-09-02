# Enter the Burger want
burger = input('¿Que hamburguesa quiere ? \n'
    'Hamburguesa clasica\n'
    'Hamburguesa vegana')

# Allow select the ingredients to Burger
if burger == "Hamburguesa clasica":

    ingredient_1 = input('Indique el primer ingrediente a añadir \n'
    'Queso Idiazabal \n'
    'Bacon \n'
    'Huevo')

    ingredient_2 = input('Indique el segundo ingrediente a añadir \n'
    'Queso Idiazabal'
    'Bacon \n'
    'Huevo')

    if ingredient_1 == "Queso Idiazabal" and ingredient_2 == "Bacon":
        print('Su hamburguesa ', burger, ' es de ', ingredient_1, ' y ', ingredient_2)

    elif ingredient_1 == "Bacon" and ingredient_2 == "Huevo":
        print('Su hamburguesa ', burger, ' es de ', ingredient_1, ' y ', ingredient_2)

    else:
        print('Los ingredientes seleccionados no estan disponibles')

elif burger == "Hamburguesa vegana":

    ingredient_1 = input('Indique el primer ingrediente a añadir \n'
    'Tofu \n' \
    'Cebolla Caramelizada')

    if ingredient_1 == "Tofu":
        print('Su hamburguesa ', burger, ' es de ', ingredient_1)

    elif ingredient_1 == "Cebolla Caramelizada":
        print('Su hamburguesa ', burger, ' es de ', ingredient_1)

    else:
        print('El ingrediente seleccionado no esta disponible')

else:
    print('La hamburguesa que quiere no esta disponible')