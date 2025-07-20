// let date1 = new Date()

interface ISpeed {
    speed: 100
}

interface ICar {
    name: string, price: number, color: string,
    run: (speed: number, jump: boolean) => boolean,
    jumping: () => void
    testing?: () => void
    wheel?: number,
    speed?: ISpeed
    "pre-order"?: boolean
    2: boolean
}

interface IAddress {
    street: string
    city: string
    postal_code?: number
}

interface IUser {
    name: string
    age: number
    address: IAddress
}

type ICar2 = {
    name: string, price: number, color: string, wheel?: number
}

let car: ICar = {
    name: "BMW",
    price: 10000000,
    color: 'blue',
    "pre-order": true,
    run: function (speed: number, jump: boolean) {
        console.log("run faster")
        return true
    },
    jumping() {

    },
    testing: function () {
        console.log("testing color : ", this.color)
    },
    2: true
}

let myPrice = "price"

console.log(car)
console.log(car.name)
car.wheel = 8
console.log(car)
car.run(100, false)

// delete car.testing

console.log(car)

console.log(car[2])

console.log(car["price"])
console.log(car[myPrice])
console.log(car["pre-order"])

let user: IUser = {
    name: "Dimas",
    age: 34,
    address: {
        street: "Ruko Sentraland",
        city: "Kab. Bogor",
        postal_code: 76859
    }
}

let user1: IUser = {
    name: "Ricky",
    age: 34
}

console.log(user.address.street)
console.log(user['address']['street'])

console.log(user1.address?.postal_code)

console.log(Object.keys(car))

let name2: string = "ady"
let name3 = name2
name2 = "fadil"
console.log(name3)

let arr = [1, 2, 3]
let arr1 = arr
arr.push(4)
console.log(arr1)

const arr3 = [4, 5, 6]
arr3.push(7)
console.log(arr3)

for (let key in car) {
    console.log(key, " => ", car[key])
}

// let price: number = car["price"]
// let color: string = car["color"]

let { price, color } = car

console.log(price, color)

const data1 = {
    name: "Dimas"
}

const data2 = {
    email: "ariesdimasy@gmail.com"
}

const dataFull = { ...data1, ...data2 }
// const dataFull2 = { data1: data1, data2: data2 } + "dimas"

console.log(dataFull)
// console.log(dataFull2)

// car?.testing()
// console.log(this) dalam arrow function  --> {}

const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, d: 4 }

const res = Object.assign(obj1, obj2)

console.log(res)