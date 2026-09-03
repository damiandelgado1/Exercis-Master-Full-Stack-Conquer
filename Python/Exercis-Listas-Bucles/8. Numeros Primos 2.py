# Create a List with number
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter the prime numbers
prime_number = []
i = 0

for i in number:

    if i % 2 == 0:
        print('Numero primo', i)
        prime_number.append(i)

# Return total number there in the List
print(prime_number)