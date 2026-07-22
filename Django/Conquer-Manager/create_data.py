from todos.models import Family, Person
import random


families = []

for i in range(1, 6):
    family = Family.objects.create(name=f"Familia {i}")

    families.append(family)


first_name = ["Juan", "Ana", "Luis", "Maria", "Pedro", "Laura", "Jorge", "Elena", "Miguel", "Pablo"]
last_name = ["Martinez", "Rodriguez", "Lopez", "Sanchez", "Perez", "Hernandez", "Romero", "Jimenez", "Ruiz", "Castro"]


for i in range(10):
    first_name = first_name[i % len(first_name)]
    last_name = last_name[i % len(last_name)]
    age = random.randint(12, 50)
    dni = f"{random.randint(10000000, 99999999)} {random.choice("ABCDEFGHIJKLMNÑOPQRSTWXYZ")}"

    person = Person.objects.create(
        first_name = first_name,
        last_name = last_name,
        age = age,
        dni = dni,
        family = random.choice(Family.objects.all())
    )