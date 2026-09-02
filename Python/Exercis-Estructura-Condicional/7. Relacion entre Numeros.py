# Enter 3 number
number_1 = int(input('Ingresa el primer numero '))
number_2 = int(input('Ingresa el segundo numero '))

result = 10

# Display if any number is the sum of the two number
if result == number_1 + number_2:
    print('El resultado ', result, ' es la suma entre ', number_1, ' y ', number_2)

else:
    print('El resultado ', result, ' no es la suma de el numero ', number_1, ' y el numero ', number_2)