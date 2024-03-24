x = input()
summ = 0
n = len(x)

for i in x:
    b = int(i) * pow(2, n-1)
    n -= 1
    summ += b

print(summ)