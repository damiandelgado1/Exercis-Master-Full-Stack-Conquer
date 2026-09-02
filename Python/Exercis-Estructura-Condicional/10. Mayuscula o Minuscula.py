# Enter a letter
letter = input('Ingrese una Letra ')

upper_case = "ABCDEFGHIJKLMNÑOPQRSTWXYZ"
lower_case = "abcdefghijklmnñopqrstwxyz"

# Verify if letter this in uppercase or lowercase
if letter in upper_case:
    print('La letra ingresada esta en Mayuscula')

else:
    print('La letra ingresada esta en Minuscula')