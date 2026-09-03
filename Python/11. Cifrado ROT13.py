text = "Hola mundo"

abc_lowercase = list("abcdefghijklmnñopqrstuvwxyz")
abc_uppercase = list("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ")

result = []

for character in text:

    if character in abc_lowercase:

        position = 0

        for i in range(26):

            if abc_lowercase[i] == character:

                position = i

                new_position = (position + 13) % 26
                result.append(abc_lowercase[new_position])

            elif character in abc_uppercase:

                position = 0

                for i in range(26):

                    if abc_uppercase[i] == character:

                        position = i

                new_position = (position + 13) % 26
                result.append(abc_uppercase(new_position))

            else:
                result.append(character)

cipher_text = "".join(result)

print('Texto original: ', text)
print('Texto cifrado: ', cipher_text)