// “ Intersect Sorted Arrays
// Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,2,7]”

// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks. 



function intersect(arr1, arr2) {
    var i = 0;
    var j = 0;
    var output = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            output.push(arr1[i])
            i++
            j++
        }
        else if (arr1[i] < arr2[j]) {
            i++
        }
        else {
            j++
        }
    }
    return output
}


intersect([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]) // [2,2,7]
intersect([2, 3, 3, 3, 4, 6, 6, 8], [2, 2, 3, 5, 5, 6, 6, 7, 7, 7, 8, 8, 9]) //[2,3,6,6,8]