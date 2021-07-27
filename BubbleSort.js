// Array: Bubble Sort
// For review, create a function that uses BubbleSort to sort an unsorted array in -place.”
//Excerpt From: Martin Puryear.“Algorithm Challenges: E - book for Dojo Students.” iBooks.

var arr = [7, 5, 3, 4, 2, 8, 1]

function bubblesort(arrInput) {
    // for j in Range(0, len(arrInput), 1):
    for (var j = 0; j < arrInput.length; j++) {
        for (var i = 0; i < arrInput.length - 1 - j; i++) {
            if (arrInput[i] > arrInput[i + 1]) {
                var temp = arrInput[i]
                arrInput[i] = arrInput[i + 1]
                arrInput[i + 1] = temp
            }
        }
    }
    return arrInput

}


console.log(bubblesort([7, 5, 3, 4, 2, 8, 1]))