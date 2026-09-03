import numpy as np

# Have apprentice with 2 test, 1 final work and participation
apprentice = [
    ["juan", 5, 4, True],
    ["andres", 7, 5, True],
    ["felipe", 4, 7, False]
]

calculate_total = np.array(apprentice, dtype=object)

puntaje_andres = apprentice[1, 2]

print('El puntaje final es: ', puntaje_andres)