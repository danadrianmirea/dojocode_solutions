def sum_of_evens(arr: list[int]) -> int:
    sum=0
    for i in range(0, len(arr)):
        if arr[i] % 2 == 0:
            sum += arr[i]
    return sum

print(sum_of_evens([1, 2, 3, 4, 5, 6]))