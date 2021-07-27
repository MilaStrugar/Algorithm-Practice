class Heap {
    constructor() {
        this.heap = [null]
    }
    insert(val) {
        //your code here
        this.heap.push(val)

        let current = this.heap.length - 1 //last index of heap(array)
        let parent = Math.floor(current / 2)
        //as long as the parent of this value we just inserted into the array is greater than it, we will swap (or while the child is less than the parent)
        while (this.heap[current] < this.heap[parent]) {
            // temp = this.heap[current]
            // this.heap[current] = this.heap[parent]
            // this.heap[parent] = temp
            [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]]
            current = parent
            parent = Math.floor(current / 2)

        }
        return this.heap
    }
}



h1 = new Heap()
h1.insert(8)
h1.insert(35)
h1.insert(3)
// console.log(h1)
h1.insert(12)

h1.insert(2)
console.log(h1)