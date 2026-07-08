# Enter time every Athlete
minute_hannah = int(input("Indica la velocidad en minutos: "))
second_hannah = int(input("Indica la velocidad en segundos: "))
centesima_hannah = float(input("Indica la velocidad en centesimas: "))

minute_jackie = int(input("Indica la velocidad en minutos: "))
second_jackie = int(input("Indica la velocidad en segundos: "))
centesima_jackie = float(input("Indica la velocidad en centesimas: "))

minute_kimberley = int(input("Indica la velocidad en minutos: "))
second_kimberley = int(input("Indica la velocidad en segundos: "))
centesima_kimberley = float(input("Indica la velocidad en centesimas: "))

# Convert minute-second-centima in seconds
total_hannah = (minute_hannah * 60) + second_hannah + (centesima_hannah / 100)
total_jackie = (minute_jackie * 60) + second_jackie + (centesima_jackie / 100)
total_kimberley = (minute_kimberley * 60) + second_kimberley + (centesima_kimberley / 100)

distancia = 100

# Calculate media speed of every one
media_hannah = distancia / total_hannah
media_jackie = distancia / total_jackie
media_kimberley = distancia / total_kimberley

# Display result in screen
print(media_hannah)
print(media_jackie)
print(media_kimberley)