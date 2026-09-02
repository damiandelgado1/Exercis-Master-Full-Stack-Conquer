# Enter a price of the product
price = int(input('Ingrese un precio '))

# Verify if the price is minor 100 USD display purchase order
if price < 100:
    print('El producto es menor a 100 USD')

# If product when between 100 USD and 150 USD display the hold order
elif price >= 100 and price <= 150:
    print('El producto esta entre los 100 USD y 150 USD')

# If price this about the 150 USD display the sale order
else:
    print('El producto esta sobre los 150 USD')