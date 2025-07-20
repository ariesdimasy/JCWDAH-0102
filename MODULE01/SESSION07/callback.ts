let result: string;

function greet(str: string) {
    result = str
}

function hello() {
    greet("hello")
}

function arigatou() {
    greet("arigatou")
}

arigatou()
console.log(result)
hello()
console.log(result)

function conclution(x: number, y: string, cb: (e: number, f: number) => void) {
    console.log(" x :", x)
    console.log(" y : ", y)
    cb(x, x)
}

function add(a: number, b: number) {
    console.log("a + b = ", a + b)
}

function multiply(c: number, d: number) {
    console.log("c * d = ", c * d)
}

conclution(10, 'sepuluh', add)
conclution(23, "dua tiga", multiply)

