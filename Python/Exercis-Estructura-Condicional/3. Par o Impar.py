# Enter a Number
number = int(input('Ingresa un Numero '))

# Append a potentiation
total_potentiation = number ** 2

# Verify if the number is par or impar
if total_potentiation % 2 == 0:
    print('Es par')
else:
    print('Es impar')