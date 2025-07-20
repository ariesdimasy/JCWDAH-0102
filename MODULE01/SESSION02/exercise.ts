let a: number = 2
if (a % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}
// 
let limit: number = 3
let res: number = 0
for (let i = 1; i <= limit; i++) {
    res = res + i // 3 + 
}
console.log(res)

/*
limit = 5 
res = 15
i = 6
*/

let num1: number = 25
let isPrime: boolean = true;

// 2 - 6
for (let i = 2; i < num1; i++) {

    // 25 % 5 === 0 --> true
    if (num1 % i === 0) {
        isPrime = false
        break;
    }
}

/*
num1 = 7
isPrime = false 
i = 7
if num1 % i --> 7 % 2 
*/

if (isPrime) {
    console.log(num1, " is prime number")
} else {
    console.log(num1, " is NOT prime number")
}

let firstNumber: number = 1
let secondNumber: number = 1
let resNumber: number;

let input = 1; // 610

for (let i = 1; i <= input; i++) {
    if (i == 1) {
        resNumber = firstNumber
        //console.log(firstNumber, ' angka ke ', i);
        continue;
    } else if (i == 2) {
        resNumber = secondNumber
        //console.log(secondNumber, " angka ke ", i)
        continue;
    }

    resNumber = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = resNumber
    //console.log(resNumber, ' angka ke ', i)
}

console.log(' angka ke ', input, ' adalah ', resNumber)