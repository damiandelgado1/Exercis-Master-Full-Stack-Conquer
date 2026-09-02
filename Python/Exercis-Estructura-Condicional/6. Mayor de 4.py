# Enter four number
number_1 = int(input('Ingresa el primer numero '))
number_2 = int(input('Ingresa el segundo numero '))
number_3 = int(input('Ingresa el tercer numero '))
number_4 = int(input('Ingresa el cuarto numero '))

# Comparate which one is Elderly
if number_1 > number_2 and number_1 > number_3 and number_1 > number_4:
    print('El numero ', number_1, ' es mayor')

elif number_2 > number_1 and number_2 > number_3 and number_2 > number_4:
    print('El numero ', number_2, ' es mayor')

elif number_3 > number_1 and number_3 > number_2 and number_3 > number_4:
    print('El numero ', number_3, ' es mayor')

else:
    print('El numero ', number_4, ' es mayor')