eur_15000 = 0.5
eur_25000 = 0.15
eur_35000 = 0.20
eur_60000 = 0.30
more_than_60000 = 0.45

# Query which desire in the Month
impositive_receive = int(input('Indique la cantidad de dinero que cobras '))

# According to a impositive type display which one will you have
if impositive_receive == eur_15000:
    print('El tipo impositivo que usted recibe es ', eur_15000)

elif impositive_receive == eur_25000:
    print('El tipo impositivo que usted recibe es ', eur_25000)

elif impositive_receive == eur_35000:
    print('El tipo impositivo que usted recibe es ', eur_35000)

elif impositive_receive == eur_60000:
    print('El tipo impositivo que usted recibe es ', eur_60000)

elif impositive_receive == more_than_60000:
    print('El tipo impositivo que usted recibe es ', more_than_60000)