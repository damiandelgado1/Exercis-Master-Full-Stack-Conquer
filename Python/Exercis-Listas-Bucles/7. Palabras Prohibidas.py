# Create a List with 5 words
words = ["numero", "letra", "manzana", "auto", "computador"]

# Create a List with 3 letter
letter = ["r", "a", "c", "b", "n"]

# Filter the word not has letter prohibited
word_clean = [
    word

    for word in words
    if not (set(word)) & letter
]