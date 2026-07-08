# Input money in EUR value to convert in USD value
money = float(input("Ingresa dinero: "))
change_cup = 1.14
convert_dollar = money * change_cup
print(convert_dollar)


# Show amount received, quantity in the change cup and dollar quantity remaining
money = float(input("Ingresa dinero: "))
change_cup = 0.10
convert_dollar = money * change_cup % 2
print(convert_dollar)