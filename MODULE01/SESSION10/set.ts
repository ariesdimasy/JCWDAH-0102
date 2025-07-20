let fruits = ["moku-moku", "magu-magu", "pika-pika", "mera-mera", "magu-magu"]

let newFruits = new Set(fruits)

console.log(newFruits)

newFruits.add("suna-suna")

console.log(newFruits)

newFruits.add("pika-pika")

console.log(newFruits)

newFruits.delete("moku-moku")

console.log(newFruits)

console.log(newFruits.entries())

newFruits.forEach((item) => {
    console.log(item)
})

// let profiledf = newFruits.map((item) => {
//     return "logia type DF :  " + item
// })

// console.log(profiledf)