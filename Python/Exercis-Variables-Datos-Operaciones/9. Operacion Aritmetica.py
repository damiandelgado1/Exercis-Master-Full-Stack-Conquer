# Display the aritmetic operation
operation_aritmetic = (3 + 2 / 2 * 5)

print(operation_aritmetic)

# Enter a integer positive and display the result
number = int(input('Ingresa un Numero '))
operation_aritmetic = number * (number + 1) / 2

print(operation_aritmetic)

# Enter two integer number
number_1 = int(input('Ingresa el primer numero '))
number_2 = int(input('Ingresa el segundo numero '))

quotient = number_1 // number_2
rest = number_1 % number_2

# Display the integer number, quotient and rest
print('Los numeros ingresados', number_1, number_2)
print('El cociente', quotient)
print('El resto', rest)