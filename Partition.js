// “ Array: Partition
// Partition unsorted array in-place. Use arr[0] as pivot val; return idx of pivot. Input [5,4,9,2,5,3] becomes [4,2,3,5,9,5], return 4.”

// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks. 


function partition(arr) {
    function swap(array, x, y) {
        var temp = array[x];
        array[x] = array[y];
        array[y] = temp
    }
    let pivot = arr[0]
    let swapIdx = 0
    for (var i = 1; i <= arr.lenght - 1; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, 0, swapIdx)
    console.log(arr)
    return swapIdx
}


partition([7, 5, 8, 3, 55, 1, 2, 9])