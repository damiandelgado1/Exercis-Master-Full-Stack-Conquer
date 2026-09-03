import numpy as np
import math

# Create array with 15 number between 1 and 100
array_1 = np.arange([1, 15, 100])
print(array_1)

# Multiply all element in Array use Loop
for number in array_1:
    multiply = math.prod(number)
    print(multiply)

# Multiply all element in Array use numpy
multiply = np.multiply(array_1)
print(multiply)

# Create new array with 15 number decimal random between 0 y 1
array_2 = np.arange([0, 15, 1])
print(array_2)

# Sum element both array element to element, use operator and numpy function
addition_1 = array_1 + array_2
addition_2 = np.add(array_1, array_2)

print(addition_1)
print(addition_2)

# Subtraction element in array
subtraction_1 = array_1 - array_2
subtraction_2 = np.subtract(array_1, array_2)

print(subtraction_1)
print(subtraction_2)

# Multiply element in array
multiply_1 = array_1 * array_2
multiply_2 = np.multiply(array_1, array_2)

print(multiply_1)
print(multiply_2)

# Find first most high in first array
high_value = max(array_1)

print(high_value)

# Calculate mean, median and standard deviation in array
mean = np.mean(array_1)
media = np.median(array_1)
standard_deviation = np.std(array_1)

print(mean)
print(media)
print(standard_deviation)