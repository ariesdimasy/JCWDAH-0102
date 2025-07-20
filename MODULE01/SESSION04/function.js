var _this = this;
sayHello(4);
// sayHelloExpression()
function hello() {
    console.log("Hello");
}
function myAdd(x) {
    console.log(x + 10);
}
function add2(x, y) {
    console.log(x + y);
    var z = x * 34; // 136
    var d = y + 24; // 29 
    console.log(z);
    console.log(d);
}
function sayHello(times) {
    // let i = 10;
    for (var i = 1; i <= times; i++) {
        console.log("hello");
    }
    // console.log(i)
}
var age = 34;
var sayHelloExpression = function () {
    var name = "dimas";
    console.log("hello expression");
    console.log(age);
};
// console.log(" my name is : ", name)
// hello()
myAdd(10);
add2(4, 5);
myAdd(456);
console.log(" ====== ");
sayHello(3);
console.log(" ====== ");
sayHello(10);
console.log(" ====== ");
sayHelloExpression();
function multiply(a, b) {
    if (b === void 0) { b = 1; }
    console.log(a * b);
}
multiply(10, 45);
multiply(10);
// rest parameter 
function sampleRestParameter(a, b, c) {
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    console.log(a); // a
    console.log(b); // b
    console.log(c); // c
    // console.log(args) // [4, 5, 6, 7, 8, 9]
    console.log(args);
}
sampleRestParameter(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(true, false, true);
// return 
function add3(x, y) {
    return x + y;
}
function add4(x, y) {
    console.log(x + y);
}
var result = add3(10, 20); // 30
var result2 = add4(10, 20); // 30
console.log(result); // 30
console.log(result2); // undefined
function getMessage(fullName) {
    function sayHello() {
        return ("Hello " + fullName);
    }
    function welcomeMessage() {
        return (" Welcome to Purwadhika ");
    }
    return sayHello() + " " + welcomeMessage();
}
// let getMessage = "Hello David Welcome to Purwadhika";
var message = getMessage("David");
console.log(message); // Hello David Welcome to Purwadhika
// let two = 2; 
function two() {
    return 2;
}
// let one;
function one() {
    console.log("one");
}
function greeting(name) {
    var defaultMessage = "Hello, ";
    return function () {
        return defaultMessage + name;
    };
}
var greetingDavid = greeting("David");
console.log(greetingDavid()); // Hello, David
function multiplier(a, b) {
    return function (c) {
        return function (d) {
            return a * b * c * d;
        };
    };
}
var multiplier3 = multiplier(3, 5);
var multiplier4 = multiplier(3, 3); // 9 
console.log(multiplier4(4)(5));
function countDown(fromNumber) {
    console.log(this);
    console.log(fromNumber); // 5 
    var nextNumber = fromNumber - 1; // langkah 
    // batasan // base case 
    if (nextNumber > 0) {
        countDown(nextNumber); // 4 
    }
}
countDown(5); // awalan dari argumen 5 
/*
5
4
3
2
1
*/
var hello2 = function () {
    console.log(_this);
    console.log("Hello");
};
hello2();
console.log(isNaN(10));
