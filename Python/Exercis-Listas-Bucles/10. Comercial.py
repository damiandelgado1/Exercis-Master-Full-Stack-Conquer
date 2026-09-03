# Has list with product, price and units
product = ["producto_1", "porducto_2", "producto_3", "producto_4", "producto_5"]

price = [30.0, 9.8, 42.5, 32.6, 71.5]

unity = [3, 1, 0, 0, 7, 2, 0, 0, 4, 0]

for i in range(5):
    amount = int(input(f'Indique la cantidad de unidades que vendio del Producto {i} '))
    unity.append(amount)

# Calculate the total money obtain
total_money = 0
total_unity = 0

for i in range(5):
    money_product = unity[i] * price[i]

    total_unity += unity[i]
    total_money += money_product

    if unity[i] > 0:
        print(f'{product[i]}: {unity[i]} unidades x {price[i]} EU = {money_product:.2f} EU')

print('-' * 45)

print(f'Cantidad total de Ventas (unidades): {total_unity}')
print(f'Dinero total facturado: {total_money:.2f} EU')