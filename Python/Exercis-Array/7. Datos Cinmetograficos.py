import numpy as np

# Create array with Movie
movie = np.array([
    ['Peli 1', 'Comedia', 120, 1990, 8.5],
    ['Peli 2', 'Accion', 110, 2005, 7.8],
    ['Peli 3', 'Drama', 95, 2010, 6.9],
    ['Peli 4', 'Comedia', 100, 1985, 7.5],
    ['Peli 5', 'Accion', 130, 2015, 8.1],
    ['Peli 6', 'Drama', 115, 2000, 6.7],
    ['Peli 7', 'Comedia', 90, 1995, 8.2],
    ['Peli 8', 'Accion', 105, 2010, 7.4],
    ['Peli 9', 'Drama', 125, 1980, 6.8],
    ['Peli 10', 'Comedia', 95, 2000, 8.0]
])

# Determinate which is Category most view
category = movie[:, 1]
unique_value, count = np.unique(category, return_counts = True)
most_viewed = unique_value[np.argmax(count)]

print('Categoria mas vista: ', most_viewed)

# Which movie launch in every decade
years = movie[:, 3].astype(int)
decade = (years // 10) * 10
unique_decade, count = np.unique(decade, return_counts = True)

print('Peliculas por decada: ')
for dec, cnt in zip(unique_decade, count):
    print(f'Decada {dec}s: {cnt}')
print('-' * 30)

# Which is average duration every one
durations = movie[:, 2].astype(float)
average_duration = np.mean(movie)

print('Duracion promedio: ')
print(f'{average_duration} minutos')