# Enter 3 lengths
large_1 = int(input('Ingresa la primera longitud '))
large_2 = int(input('Ingresa la segunda longitud '))
large_3 = int(input('Ingresa la tercera longitud '))

# Verify if can build a Triangle
if large_1 + large_2 > large_3 and large_1 + large_3 > large_2 and large_2 + large_3 > large_1:
    print('Si se puede construir un Techo en forma de Triangulo')

else:
    print('No se puede construir un Techo en forma de Triangulo')