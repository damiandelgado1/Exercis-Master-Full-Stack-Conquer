# Has a character list "palabra"
palabras = ["A5", "B3", "C1", "C2", "A3", "A2"]

# Has the total point
total_point = []

# The total value is the Sum of point in cards
for card in palabras:
    card_point = int(card[1])

    total_point += card_point

print(f'El valor total de los Puntos es {card_point}')