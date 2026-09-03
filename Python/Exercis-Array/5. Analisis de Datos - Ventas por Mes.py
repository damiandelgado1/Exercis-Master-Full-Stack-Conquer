import numpy as np

# Have monthly sales
sales = np.array([
    ['2022-01-01', 100, 'ropa'],
    ['2022-01-02', 200, 'alimentos'],
    ['2022-01-03', 150, 'ropa'],
    ['2022-02-01', 120, 'alimentos'],
    ['2022-02-02', 180, 'electronicos'],
    ['2022-02-03', 200, 'alimentos'],
    ['2022-03-01', 90, 'ropa'],
    ['2022-03-02', 110, 'electronicos'],
    ['2022-03-03', 100, 'alimentos'],
])

dates = sales[:, 0]
amounts = sales[:, 1].astype(int)

sales_january = np.sum(amounts[np.char.startswith(dates, '2022-01')])
sales_february = np.sum(amounts[np.char.startswith(dates, '2022-02')])
sales_march = np.sum(amounts[np.char-startswith(dates, '2022-03')])

print(sales_january)
print(sales_february)
print(sales_march)