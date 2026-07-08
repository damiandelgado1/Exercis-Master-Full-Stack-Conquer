# Write a Program with message "Estas usando Python" in a Variable
message = "Estas usando Python"
print(message)


# Use a "name" variable for show message with "¡Hola, <nombre>, estas usando Python!"
name = input("Ingresar Nombre: ")
print(f"¡Hola, {name} estas usando Python!")


# Use a UpperCase in message for display message in UpperCase
name = input("Ingresa Nombre: ")
message = "Hola " + name + " estas usando Python"
print(message.upper())


# Display message en LowerCase
name = input("Ingresa Nombre: ")
message = "Hola " + name + " estas usando Python"
print(message.lower())


# Convert message in correct format
name = input("Ingresa Nombre: ")
message = "Hola " + name + " estas usando Python"
print(message.title())


# Apply functionability format word in correct format
name = input("Ingrese Nombre: ")
message = "Hola " + name + " estas usando Python"
message.replace(".", ",", ":", "-", "_")
print(message)


# Display message final is "¡Hola <nombre>, estas usando Python!"
name = input("Ingrese Nombre: ")
message = "Hola " + name + " estas usando Python"
print(message)