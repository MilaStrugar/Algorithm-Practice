// “ Array: Partition
// Partition unsorted array in-place. Use arr[0] as pivot val; return idx of pivot. Input [5,4,9,2,5,3] becomes [4,2,3,5,9,5], return 4.”

// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks. 



// let x = [4,3,8,7,5,1] //returns index 2

// [3,1,4,8,7,5,1]



// [7,5,8,3,55,1,2,9]//original array to modify

// [5,3,1,2,7,8,55,9] //array would look like this at the end and function will return index 4- where the 7 was placed




function partition(arr, start = 0, end = arr.length - 1) {
    function swap(array, x, y) {
        var temp = array[x];
        array[x] = array[y];
        array[y] = temp
    }
    let pivot = arr[start];
    let swapIdx = start;
    for (var i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            //the purpose of this swap is to jumble up the numbers that are smaller than the pivot number together
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    console.log(arr)
    return swapIdx
}


// partition([7,5,8,3,55,1,2,9])

function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        console.log('pivot index is:', pivotIndex)
        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, right)
    }
    return arr
}

console.log(quicksort([7, 6, 2, 3, 1, 9, 0]))