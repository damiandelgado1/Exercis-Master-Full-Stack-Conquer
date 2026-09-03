# Create "fruit" list
fruit = ('manzana', 'platano', 'cereza', 'pera', 'higo', 'frambuesa', 'fresa')

# Use "len()" function to display length of the List
print(fruit.len())

# Access 3 object in the List
print(fruit[2])

# Modify 2 objet of the List and change to "mora"
fruit[1] = "mora"
print(fruit)

# Add "mango" string in the end of the List
fruit.append("mango")
print(fruit)

# Use "insert()" method to add "uva" in the start of the List
fruit.insert("uva")
print(fruit)

# Use the loop to travel the List and display every fruit
i = 0

for i in fruit:
    print(i)

# Use "pop()" method to delete last element of the List and save in variable "ultima_fruta"
print(fruit.pop())

# Create a loop to travel the List and display every fruit
i = 0

for i in fruit:
    print(fruit)

# Display alone fruit with 5 characters
i = 0

for i in fruit:

    if i.len() <= 5:
        print(i)

# Use "remove()" method to delete string "cereza" in the List
fruit.remove("fresa")
print(fruit)

# Use "clear()" method to empty the List
print(fruit.clear())