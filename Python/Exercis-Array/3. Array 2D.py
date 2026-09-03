import numpy as np

# Create array with 1 and length enter in input
row_number = int(input('Indique el Numero de filas en el Array'))
col_number = int(input('Indique el Numero de columnas en el Array'))

array_1 = np.ones([[row_number], [col_number]])

print(array_1)

# Modify form array to have col and row
array_1 = np.reshape(2, 3)

print(array_1)

# Create "matriz identidad" with same form array former
matriz_id = np.identity(3)

print(matriz_id)