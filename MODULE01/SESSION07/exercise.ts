let user = {
    name: "David",
    age: 20
}

console.log(user)

let user1 = {}

for (let key in user) {
    user1[user[key]] = key
}

// user1["David"] = "name"
// user1[20] = "age"

console.log(user1)

function factorial(num: number) {
    if (num === 1) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(5))

