import numpy as np

# Create Array "array_1" with 0 of length 8 element
array_1 = [0, 0, 0, 0, 0, 0, 0, 0]
print(array_1)

# Replace "0" to "8"
array_1 = np.zeros(8, dtype=int)

np.place(array_1, array_1 == 0, 2)
print(array_1)

# Create "array_2" with prime number 1 to 10
array_2 = np.arange(1, 11)

print(array_2)

# Sum all element in Array
array_2 = np.sum(array_2)
print(array_2)

# Reverse "array_2" and save in variable
reverse_array = array_2[::-1]
print(reverse_array)

# Find common element between "array_1" and "array_2" and between "array_2" and "reverse_array"
common_element_1 = np.intersect1d(array_1, array_2)
common_element_2 = np.intersect1d(array_2, reverse_array)

print(common_element_1)
print(common_element_2)

# Create array with 1 and length enter to input
enter_length = int(input('Indique la longitud del Array '))

array_3 = np.arange(1, enter_length + 1)

print(array_3)