from django.db.models import Count, Avg, Sum, Min, Max
from todos.models import Person, Family


total_persons = Person.objects.count()
print(f"Total de Personas: {total_persons}")

average_age = Person.objects.aggregate(Avg("age"))
print(f"Edad promedio: {average_age["age__avg"]}")

total_age = Person.objects.aggregate(Sum("age"))
print(f"Total de Edades: {total_age["age__sum"]}")

min_age = Person.objects.aggregate(Min("age"))
print(f"Edad minima: {min_age["age__min"]}")