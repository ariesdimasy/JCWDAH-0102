let arr: number[] = [1, 2, 3, 4, 5, 6]

arr = arr.map((item) => {
    return item * 2
})

console.log(arr)

arr.forEach((item) => {
    console.log(item)
})