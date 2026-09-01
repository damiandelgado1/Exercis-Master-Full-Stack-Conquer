# Enter a password
password = input('Ingresa una contraseña ')

has_vocal = ('a' in password) or ('e' in password) or ('i' in password) or ('o' in password) or ('u' in password)

has_simbolo = ('*' in password) or ('#' in password)

# Verify if password is secure or no
if has_vocal and has_simbolo:
    print('Contraseña segura')
else:
    print('La contraseña no es segura')