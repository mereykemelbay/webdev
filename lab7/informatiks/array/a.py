arr = []
n = int(input())

for i in range(0, n):
    x = int(input())
    arr.append(x)


for i in range(0, n):
    if i % 2 == 0:
        print(arr[i])