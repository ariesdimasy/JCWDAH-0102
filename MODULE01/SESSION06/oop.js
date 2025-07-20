var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.greeting = function () {
        console.log("Hello, ", this.name);
    };
    return Human;
}());
var Human2 = /** @class */ (function () {
    function class_1() {
    }
    return class_1;
}());
var dimas = new Human("Dimas"); // object baru terbuat
var rizky = new Human("Rizky"); // object baru terbuat
// dimas.name = "dimas"
// rizky.name = "rizky"
console.log(dimas);
console.log(rizky);
dimas.greeting();
rizky.greeting();
// console.log(dimas.age)
console.log(dimas);
