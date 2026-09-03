# Create 2 List with 3 List of the Number
M1 = [
    [2, 5, 3],
    [6, 1, 8],
    [7, 5, 4]
]

M2 = [
    [4, 2, 3],
    [4, 5],
    [6, 8, 2]
]

max_row = M1[0]
max_row = M2[0]

sum_row_max = 0

# Verify in M1
for num in M1[0]:
    sum_row_max += num

for row in M1:
    actual_sum = 0

    for num in row:
        actual_sum += num

    if actual_sum > sum_row_max:
        sum_row_max = actual_sum
        max_row = row

max_col = []

sum_col_max = float('-inf')
col_num = len(M1[0])

for j in range(col_num):
    actual_col = []
    actual_sum = 0

    for i in range(len(M1)):

        element = M1[i][j]
        actual_col.append(element)
        actual_sum += element

    if actual_sum > sum_col_max:
        sum_col_max = actual_sum
        max_col = actual_col

# Verify in M2
for num in M2[0]:
    sum_row_max += num

for row in M2:
    actual_sum = 0

    for num in row:
        actual_sum += num

    if actual_sum > sum_row_max:
        sum_row_max = actual_sum
        max_row = row

max_col = []

sum_col_max = float('-inf')
col_num = len(M2[0])

for j in range(col_num):
    actual_col = []
    actual_sum = 0

    for i in range(len(M2)):

        element = M2[i][j]
        actual_col.append(element)
        actual_sum += element

    if actual_sum > sum_col_max:
        sum_col_max = actual_sum
        max_col = actual_col

# Display List with the Number sum the max
L1 = max_row
L2 = max_col

print("M1 -> L1 =", L1)
print("M2 -> L2 =", L2)