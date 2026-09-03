# Find the element duplicate in the List
duplicate_number = [1, 2, 2, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8, 8]

# Add the Element in the new List
number_list = list(set(duplicate_number))
print(number_list)

# A two List and order in the Upward order
number_list_1 = [1, 2, 3, 4, 5]
number_list_2 = [6, 7, 8, 9, 10]

number = number_list_1 + number_list_2
print(number)

# Find the second big Number in the List
upward_number = max(number)
print(number)

# Query the Number and find the High number
enter_number = int(input('Ingresa un Numero'))

for i in number_list:

    if i > enter_number:
        print(i)

# Extracts the Number common in the 2 List
common_number = list(set(number_list_1) & set(number_list_2))
print(common_number)

# Count the Number apparition a Number in the List
number_in_list = int(input('Ingrese el Numero que busca '))

i = 0

for i in number_list_1:

    if number_in_list in number_list_1:
        print('El numero ', number_in_list, ' si esta en la Lista')

# Return List with string in uppercase
string = ("python", "java", "javascript")

upper_case = [texto.upper() for texto in string]

print(upper_case)