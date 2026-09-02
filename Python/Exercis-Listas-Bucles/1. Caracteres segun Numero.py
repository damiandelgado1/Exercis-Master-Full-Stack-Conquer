# Enter a number
number = int(input('Ingrese un numero '))

i = 0

# Display "*" character until the number enter
for i in range(1, number + 1):
    print('*' * i)