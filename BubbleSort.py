# Array: Bubble Sort
# For review, create a function that uses BubbleSort to sort an unsorted array in -place.”

# Excerpt From: Martin Puryear. “Algorithm Challenges: E - book for Dojo Students.” iBooks.

# PYTHON
def BubbleSort(arr):
    for i in range(0, len(arr), 1):
        for j in range(0, (len(arr) - i - 1), 1):
            if arr[j] > arr[j + 1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

    return arr


arr2 = [2, 7, 1, 44, 25]
print(BubbleSort(arr2))
