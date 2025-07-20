let name: string = 'dimas';
let nameSplit: string[] = name.split(''); // This is a method call on the string object
let anotherNameSplit: string[] = name.split('m'); // This is another method call on the string object
console.log(nameSplit);
console.log(anotherNameSplit);

let nameLowerCase: string = name.toLowerCase(); // This is a method call on the string object
let nameUpperCase: string = name.toUpperCase(); // This is another method call on the string object
console.log(nameLowerCase);
console.log(nameUpperCase);

let address: string = ` ${name} tinggal di Jl. Raya No. 123
Kota Jakarta, Indonesia
12345`;
// This is a template literal, which allows for multi-line strings and string interpolation
console.log(address);

let myNum: number = 123
let myNumString: string = myNum.toString(); // This is a method call on the number object to convert it to a string
console.log(typeof myNum)
console.log(typeof myNumString); // This will log 'string' because myNumString is now a string

let myNum2: string = "123"
let myNum2Number: number = parseInt(myNum2); // This is a method call to convert a string to a number
let myNum3Number: number = Number(myNum2); // This is another method call to convert a string to a number
console.log(myNum2);
console.log(myNum2Number); // This will log 'number' because myNum2Number is now a number
console.log(myNum3Number); // This will log 'number' because myNum3Number is now a number

console.log(parseInt(true as any))
console.log(Number(false as any)) // This will log 0 because false is converted to 0

console.log(String(true)); // This will log 'true' because true is converted to the string 'true'
console.log(Boolean(1)); // This will log 'true' because 1 is converted to the boolean 'true'
console.log(Boolean(0)); // This will log 'false' because 0 is converted to the boolean 'false'
console.log(Boolean(123)); // This will log 'false' because null is converted to the boolean 'false'
console.log(Boolean("")); // This will log 'false' because an empty string is converted to the boolean 'false'
console.log(Boolean("Hello")); // This will log 'true' because a non-empty string is converted to the boolean 'true'
console.log(Boolean(undefined)); // This will log 'true' because an empty array is converted to the boolean 'true'