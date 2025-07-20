let num = 12;
let name = "Yudhistira 123 &*I)(*&&^^^% true false";
let isMarried = true;
let isSingle = false;
let isDivorced = null;
let isWidowed = undefined;
let abc = true;
let def = false;

isMarried = "Married"; // reassigning a boolean to a string

console.log(num);
console.log(name);
console.log(isMarried);
console.log(isSingle);
console.log(isDivorced);
console.log(isWidowed);
console.log(abc);
console.log(def);
console.log("============================");
console.log(typeof num);
console.log(typeof name);
console.log(typeof isMarried); // boolean
console.log(typeof isSingle); // boolean
console.log(typeof isDivorced); // object (null is considered an object in JavaScript)
console.log(typeof isWidowed); // undefined
console.log(typeof abc); // boolean
console.log(typeof def); // boolean

let person = {
  name: "Aries Dimas",
  abc: undefined,
  age: 34,
  23: "This is a string with a number as a key",
  address: {
    street: "Jl. Contoh No. 123",
    city: "Jakarta",
    country: "Indonesia",
  },
};
console.log(person);
console.log(typeof person); // object

let numbers = [1, 2, 3, 4, 5];
let miscellanous = [
  1,
  "two",
  true,
  null,
  undefined,
  { key: "value" },
  [6, 7, 8],
];
console.log(numbers);
console.log(typeof numbers); // object (arrays are also considered objects in JavaScript)
console.log(miscellanous);
console.log(typeof miscellanous); // object
