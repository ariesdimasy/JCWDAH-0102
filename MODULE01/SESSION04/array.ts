let arr: number[] = [1, 2, 3, 4, 5]
console.log(arr)

arr[3] = 8

console.log(arr)
console.log(arr.length)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// arr[0] = arr[0] * 2;
// arr[1] = arr[1] * 2;

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
}

console.log(arr)

let drinks: string[] = ["kopi", 'teh']

let temp: string = ""

temp = drinks[1]
drinks[1] = drinks[0]
drinks[0] = temp

console.log(drinks) // ["teh", 'kopi']

let test: boolean[] = [true, false, false, true]

let students: { name: string, email: string }[] = [
    {
        name: "dimas",
        email: "ariesdimasy@gmail.com"
    }
]

console.log(students)

drinks.push("Cappucino")
console.log(drinks)

drinks.pop()
console.log(drinks)

let drinksFilter = drinks.filter((item) => {
    return item == 'kopi'
})

console.log(drinksFilter)

let twiceArr = arr.map(item => {
    return item * 2
})

console.log(twiceArr)

let sortArr = arr.sort((a, b) => a - b)
let sort1 = arr.sort()

console.log(sort1)

for (let item of sort1) {
    console.log(item)
}