sayHello(4)
// sayHelloExpression()

function hello() {
    console.log("Hello")
}

function myAdd(x: number) {
    console.log(x + 10)
}

function add2(x: number, y: number) {
    console.log(x + y)
    let z = x * 34 // 136
    let d = y + 24 // 29 
    console.log(z)
    console.log(d)
}

function sayHello(times: number) {
    // let i = 10;
    for (let i = 1; i <= times; i++) {
        console.log("hello")
    }
    // console.log(i)
}

let age = 34

let sayHelloExpression = function () {
    let name = "dimas"
    console.log("hello expression")
    console.log(age)
}

// console.log(" my name is : ", name)

// hello()
myAdd(10)
add2(4, 5)
myAdd(456)

console.log(" ====== ")
sayHello(3)
console.log(" ====== ")
sayHello(10)
console.log(" ====== ")

sayHelloExpression()

function multiply(a: number, b: number = 1) {
    console.log(a * b)
}

multiply(10, 45)
multiply(10)

// rest parameter 
function sampleRestParameter(a: number, b: number, c: number, ...args: number[]) {
    console.log(a) // a
    console.log(b)// b
    console.log(c) // c
    // console.log(args) // [4, 5, 6, 7, 8, 9]
    console.log(args)
}

sampleRestParameter(1, 2, 3, 4, 5, 6, 7, 8, 9)

console.log(1, 2, 3, 4, 5, 6, 7, 8, 9)

console.log(true, false, true)

// return 

function add3(x: number, y: number): number {
    return x + y
}

function add4(x: number, y: number): void {
    console.log(x + y)
}

let result = add3(10, 20) // 30
let result2 = add4(10, 20) // 30


console.log(result) // 30
console.log(result2) // undefined

function getMessage(fullName: string) {
    function sayHello() {
        return ("Hello " + fullName)
    }

    function welcomeMessage() {
        return (" Welcome to Purwadhika ");
    }

    return sayHello() + " " + welcomeMessage()
}
// let getMessage = "Hello David Welcome to Purwadhika";

const message = getMessage("David")
console.log(message) // Hello David Welcome to Purwadhika

// let two = 2; 
function two() {
    return 2
}

// let one;
function one() {
    console.log("one")
}

function greeting(name: string) {
    const defaultMessage: string = "Hello, ";

    return function () {
        return defaultMessage + name;

    }
}

const greetingDavid = greeting("David");
console.log(greetingDavid()); // Hello, David

function multiplier(a: number, b: number) {
    return function (c: number) {
        return function (d: number) {
            return a * b * c * d;
        }

    }
}

const multiplier3 = multiplier(3, 5)
const multiplier4 = multiplier(3, 3) // 9 

console.log(multiplier4(4)(5));

function countDown(fromNumber: number) {
    console.log(this)
    console.log(fromNumber) // 5 

    let nextNumber = fromNumber - 1; // langkah 

    // batasan // base case 
    if (nextNumber > 0) {
        countDown(nextNumber); // 4 
    }
}

countDown(5) // awalan dari argumen 5 
/*
5
4
3
2
1
*/

const hello2 = () => {
    console.log(this)
    console.log("Hello")
}

hello2();

console.log(isNaN(10))