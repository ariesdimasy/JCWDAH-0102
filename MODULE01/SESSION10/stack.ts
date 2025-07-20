let arr: number[] = [1, 2, 3, 4, 6]
console.log(arr)
arr.push(7)
console.log(arr)
arr.pop()
arr.pop()
console.log(arr)

function stack(arr: number[], input: number, pop: boolean, maxSize = 5) {

    if (pop == false && arr.length < maxSize) {
        arr.push(input)
    } else if (pop == true && arr.length > 0) {
        arr.pop()
    }

    return arr
}

console.log(stack([1, 2, 3], 7, false, 5))
console.log(stack([1, 2, 3], 7, true, 2))
console.log(stack([1, 2, 3], 4, false, 3))
console.log(stack([], 4, true, 0))