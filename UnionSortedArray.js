// “ Union Sorted Arrays
// Efficiently combine two already-sorted arrays into a new sorted array containing the multiset union. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].”

// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks. 




// given [1,2,2,2,7] and [2,2,6,6,7]


// [1,2,2,2,6,6,7]



// [-4,-2,2,2,7,7,7] [-4,1,2,2,6,6,7,7]

[-4, -2, 1,]


function union(arr1, arr2) {
    let output = []
    let firstarryIdx = 0;
    let secondarryIdx = 0;

    while (firstarryIdx < arr1.length && secondarryIdx < arr2.length) {
        if (arr1[firstarryIdx] == arr2[secondarryIdx]) {
            output.push(arr1[firstarryIdx])
            firstarryIdx++
            secondarryIdx++
        }
        else if (arr1[firstarryIdx] < arr2[secondarryIdx]) {
            output.push(arr1[firstarryIdx])
            firstarryIdx++
        }
        else {
            output.push(arr2[secondarryIdx])
            secondarryIdx++
        }
    }

    //if the first array is longer than second arry, put all the remianing values from first arry into output
    while (firstarryIdx < arr1.length) {
        output.push(arr1[firstarryIdx])
        firstarryIdx++
    }

    //if the second array is longer than first arry, put all the remianing values from second arry into output
    while (secondarryIdx < arr2.length) {
        output.push(arr2[secondarryIdx])
        secondarryIdx++
    }

    console.log(output)
}

union([1, 2, 2, 2, 7, 7, 70000000], [2, 2, 6, 6, 7, 7, 5000, 3500000])


//ANOTHER SOLUTION 

unionSortedArr = (arr1, arr2) => {
    let output = []
    while (arr1.length != 0 || arr2.length != 0) {
        if (arr2[0] == arr1[0]) {
            output.push(arr2.shift())
            arr1.shift()
        }
        if (arr1[0] < arr2[0])
            output.push(arr1.shift())
        if (arr2[0] < arr1[0])
            output.push(arr2.shift())
        if (arr1.length == 0 && arr2.length > 0)
            output.push(arr2.shift())
        if (arr2.length == 0 && arr2.length > 0)
            output.push(arr2.shift())
    }
    return output
}

//output would look like this [1,2,2,2, 6,6, 7, 7, 7]