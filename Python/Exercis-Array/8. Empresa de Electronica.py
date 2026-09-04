import numpy as np

# Create array with component in enterprise
data = np.array([
    ['2022-01-01', 'Componente 1', 'Lote A', 80],
    ['2022-01-15', 'Componente 1', 'Lote B', 90],
    ['2022-02-01', 'Componente 2', 'Lote C', 85],
    ['2022-02-15', 'Componente 2', 'Lote D', 95],
    ['2022-03-01', 'Componente 1', 'Lote E', 75],
    ['2022-03-15', 'Componente 2', 'Lote F', 90]
])

# Display the component with high quality puntuation
high_quality = data.max()

print('El componente con mas calidad es ', high_quality)

# Show how many component factory in every month
month, amount = np.unique(data, return_counts = True)

for month, amount in zip(month, amount):
    print(f'Mes {month}: {amount} componentes fabricados')

# Display the average high quality puntuation of every type
uniques_types = np.unique(data)

for tipo in uniques_types:
    puntuations_type = data[tipo == type]

    average = np.mean(puntuations_type)

    print(f'Tipo {tipo}: Puntuacion media = {average:.2f}')