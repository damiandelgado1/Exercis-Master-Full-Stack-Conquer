# Enter the name
name = input('Ingrese el Nombre ')
print(name)

# Enter money earned for hour and hour worked
money_hour = int(input('Ingresa el dinero ganado por hora '))
hour_worked = int(input('Ingresa las horas de trabajo '))

week_salary = money_hour * hour_worked
print('Ingreso semanal ', week_salary)

# Calculate total annual earned
week_hour = int(input('Ingresa las horas que trabajas a la semana '))
week_annual = int(input('Ingresa las semanas que trabajas al año '))

annual_earned = money_hour * week_hour * week_annual
print('Las ganancias obtenidas al año son ', annual_earned)

# Display the earned annual obtained
print(f'{name} gana {annual_earned} al año')

# Query the bills
week_bills = int(input('Ingresa los gastos semanales '))

print('Los gastos semanales son ', week_bills)

# Calculate annual bills
annual_bills = week_bills * week_annual
print('Los gastos anuales son ', annual_bills)