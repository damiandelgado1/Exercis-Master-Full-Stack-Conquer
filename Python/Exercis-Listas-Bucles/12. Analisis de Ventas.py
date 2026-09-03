# Create a List with number sale in the Shop
sales = [120, 80, 140, 200, 75, 100, 180, 220, 160, 110, 90, 120, 170, 190, 250, 300]

# Day of week to calculate sale
week_day = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Vienres', 'Sabado', 'Domingo']

# Create a new List with input to every day of week
sales_day = []

# Use loop to add the sum according to every day in week
for day in week_day:
    sale_day = int(input(f'¿Cuantas ventas hizo en el dia {day}? '))

    sales_day.append(sale_day)
    print(f'En el dia {day} se vendieron {sale_day}')

print(f'El total de ventas de la semana fue: {sum(sales_day)}')