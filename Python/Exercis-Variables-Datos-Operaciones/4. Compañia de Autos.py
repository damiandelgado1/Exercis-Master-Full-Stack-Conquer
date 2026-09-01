# The storage car with comission
rbm_serie_1_price = 20.000
rbm_serie_2_price = 35.000
rbm_serie_3_price = 60.000

rbm_serie_1_comission = 0.3
rbm_serie_2_comission = 0.5
rbm_serie_3_comission = 0.7

# Query how many car sale and return EUR quantity comission this month
amount_car_rbm_1 = int(input('¿Cuantos autos RBM 1 vendio?'))
amount_car_rbm_2 = int(input('¿Cuantos autos RBM 2 vendio?'))
amount_car_rbm_3 = int(input('¿Cuantos autos RBM 3 vendio?'))

# Calculate EUR total comission this month
eur_comission_rbm_1 = amount_car_rbm_1 * (0.3 / 100)
eur_comission_rbm_2 = amount_car_rbm_1 * (0.5 / 100)
eur_comission_rbm_3 = amount_car_rbm_1 * (0.7 / 100)

print(eur_comission_rbm_1)
print(eur_comission_rbm_2)
print(eur_comission_rbm_3)