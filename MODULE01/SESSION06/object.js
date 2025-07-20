// let date1 = new Date()
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
var car = {
    name: "BMW",
    price: 10000000,
    color: 'blue',
    "pre-order": true,
    run: function (speed, jump) {
        console.log("run faster");
        return true;
    },
    jumping: function () {
    },
    testing: function () {
        console.log("testing color : ", this.color);
    },
    2: true
};
var myPrice = "price";
console.log(car);
console.log(car.name);
car.wheel = 8;
console.log(car);
car.run(100, false);
// delete car.testing
console.log(car);
console.log(car[2]);
console.log(car["price"]);
console.log(car[myPrice]);
console.log(car["pre-order"]);
var user = {
    name: "Dimas",
    age: 34,
    address: {
        street: "Ruko Sentraland",
        city: "Kab. Bogor",
        postal_code: 76859
    }
};
var user1 = {
    name: "Ricky",
    age: 34
};
console.log(user.address.street);
console.log(user['address']['street']);
console.log((_a = user1.address) === null || _a === void 0 ? void 0 : _a.postal_code);
console.log(Object.keys(car));
var name2 = "ady";
var name3 = name2;
name2 = "fadil";
console.log(name3);
var arr = [1, 2, 3];
var arr1 = arr;
arr.push(4);
console.log(arr1);
var arr3 = [4, 5, 6];
arr3.push(7);
console.log(arr3);
for (var key in car) {
    console.log(key, " => ", car[key]);
}
// let price: number = car["price"]
// let color: string = car["color"]
var price = car.price, color = car.color;
console.log(price, color);
var data1 = {
    name: "Dimas"
};
var data2 = {
    email: "ariesdimasy@gmail.com"
};
var dataFull = __assign(__assign({}, data1), data2);
// const dataFull2 = { data1: data1, data2: data2 } + "dimas"
console.log(dataFull);
// console.log(dataFull2)
// car?.testing()
// console.log(this) dalam arrow function  --> {}
var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, d: 4 };
var res = Object.assign(obj1, obj2);
console.log(res);
