// //“ Array: Combine
// Create function combineArrs(arr1,arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array. Can you work completely in-place?
// ”

// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks. 
function combineArrays(arr1, arr2) {
    let counter1 = 0, counter2 = 0, arr3 = []
    for (var i = 0; i < (arr1.length + arr2.length); i++) {
        if (arr1[counter1] <= arr2[counter2]) {
            arr3.push(arr1[counter1])
            counter1 += 1
        } else {
            arr3.push(arr2[counter2])
            counter2 += 1
        }
    }
    return arr3
}

arr1 = [1, 3, 5, 7]
arr2 = [2, 4, 6, 8]

console.log(combineArrays(arr1, arr2))