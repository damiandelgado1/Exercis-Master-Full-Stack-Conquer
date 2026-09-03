# Create a List with Number
number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Create new List with About Number
i = 0

for i in number:

    if i % 2 == 0:
        print(i)

# Create a Loop to display the square of the every number
i = 0

for i in number:

    i ** 2
    print(i)

# Use a method to return the Number most little and display in the Screen
minor = min(number)
print(minor)

# Use a method to return the Number most big
elderly = max(number)
print(elderly)

# Sum all Number of the List with and without Loop
i = 0

for i in number:
    i += 1

    print(i)

addition = sum(number)
print(addition)

# Find the index 8 of the Number in the List
print(number[8])