var result;
function greet(str) {
    result = str;
}
function hello() {
    greet("hello");
}
function arigatou() {
    greet("arigatou");
}
arigatou();
console.log(result);
hello();
console.log(result);
function conclution(x, y, cb) {
    console.log(" x :", x);
    console.log(" y : ", y);
    cb(x, x);
}
function add(a, b) {
    console.log("a + b = ", a + b);
}
function multiply(c, d) {
    console.log("c * d = ", c * d);
}
conclution(10, 'sepuluh', add);
conclution(23, "dua tiga", multiply);
