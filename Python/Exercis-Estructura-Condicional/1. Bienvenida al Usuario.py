# Enter the username in the computer
username = input('Ingresa el Nombre de Usuario')

# A computer has 3 user
computer_user_1 = "Alejandro"
computer_user_2 = "Naomi"
computer_user_3 = "Sergio"

# Greet the user in the computer
if username != computer_user_1 or username != computer_user_2 or username != computer_user_3:
    print('Hola ', username)

elif username.islower():
    print('Hola', username)

elif username.isupper():
    print('Hola', username)

else:
    print('Este nombre de usuario no existe en el computador')