# Create List with username
username_correct = ["juan123", "alberto456", "pedro789"]

# Create List with password
password_correct = ["clave123", "clave456", "clave789"]

# Query enter username and password
username_enter = input('Ingrese el Nombre de Usuario ')
password_enter = input('Ingrese la Contraseña ')

# Verify if username and password is correct
for username in username_correct:
    for password in password_correct:

        if username_enter == username and password_enter == password:
            print('El nombre de usuario y contraseña son correctos')

        else:
            print('El nombre de usuario y contraseña no son correctos')