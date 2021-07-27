// “ Array: Selection Sort
// For review, create a function that uses SelectionSort to sort an unsorted array in -place.
// ”

// Excerpt From: Martin Puryear.“Algorithm Challenges: E - book for Dojo Students.” iBooks.

var inputArr = [0, 2, 3, 5, 4]
function SelectionSort(inputArr) {
    let n = inputArr.length;

    for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min != i) {
            // Swapping the elements
            let temp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = temp;
        }
    }
    return inputArr;
}

SelectionSort(inputArr);
console.log(inputArr);