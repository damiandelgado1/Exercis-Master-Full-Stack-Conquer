# Create a Input
first_name = input('Indique el Nombre del Aprendiz ')
last_name = input('Indique el Apellido del Aprendiz ')
dni = int(input('Indique el DNI del Aprendiz '))
theme_code = int(input('Indique el codigo del Tema '))
call_application = input('Indique la convocatoria ')
score_1 = int(input('Indique el primer puntaje '))
score_2 = int(input('Indique el segundo puntaje '))
score_3 = int(input('Indique el tercer puntaje '))

# Add the data of the apprentice in the List
apprentice = []

apprentice.append(first_name, last_name, dni, theme_code, call_application, score_1, score_2, score_3)

# Display all data apprentice and average score
print(apprentice)

data_apprentice = apprentice[0]

score = [data_apprentice[5], data_apprentice[6], data_apprentice[7]]

average = sum(score) / len(score)

print('El promedio de los puntajes es: ', average)