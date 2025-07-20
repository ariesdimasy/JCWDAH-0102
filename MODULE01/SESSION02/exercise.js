var a = 2;
if (a % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}
// 
var limit = 3;
var res = 0;
for (var i = 1; i <= limit; i++) {
    res = res + i; // 3 + 
}
console.log(res);
/*
limit = 5
res = 15
i = 6
*/
var num1 = 25;
var isPrime = true;
// 2 - 6
for (var i = 2; i < num1; i++) {
    // 25 % 5 === 0 --> true
    if (num1 % i === 0) {
        isPrime = false;
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
    console.log(num1, " is prime number");
}
else {
    console.log(num1, " is NOT prime number");
}
var firstNumber = 1;
var secondNumber = 1;
var resNumber;
var input = 1; // 610
for (var i = 1; i <= input; i++) {
    if (i == 1) {
        resNumber = firstNumber;
        //console.log(firstNumber, ' angka ke ', i);
        continue;
    }
    else if (i == 2) {
        resNumber = secondNumber;
        //console.log(secondNumber, " angka ke ", i)
        continue;
    }
    resNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = resNumber;
    //console.log(resNumber, ' angka ke ', i)
}
console.log(' angka ke ', input, ' adalah ', resNumber);
