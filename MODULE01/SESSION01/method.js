var name = 'dimas';
var nameSplit = name.split(''); // This is a method call on the string object
var anotherNameSplit = name.split('m'); // This is another method call on the string object
console.log(nameSplit);
console.log(anotherNameSplit);
var nameLowerCase = name.toLowerCase(); // This is a method call on the string object
var nameUpperCase = name.toUpperCase(); // This is another method call on the string object
console.log(nameLowerCase);
console.log(nameUpperCase);
var address = " ".concat(name, " tinggal di Jl. Raya No. 123\nKota Jakarta, Indonesia\n12345");
// This is a template literal, which allows for multi-line strings and string interpolation
console.log(address);
var myNum = 123;
var myNumString = myNum.toString(); // This is a method call on the number object to convert it to a string
console.log(typeof myNum);
console.log(typeof myNumString); // This will log 'string' because myNumString is now a string
var myNum2 = "123";
var myNum2Number = parseInt(myNum2); // This is a method call to convert a string to a number
var myNum3Number = Number(myNum2); // This is another method call to convert a string to a number
console.log(myNum2);
console.log(myNum2Number); // This will log 'number' because myNum2Number is now a number
console.log(myNum3Number); // This will log 'number' because myNum3Number is now a number
console.log(parseInt(true));
console.log(Number(false)); // This will log 0 because false is converted to 0
console.log(String(true)); // This will log 'true' because true is converted to the string 'true'
console.log(Boolean(1)); // This will log 'true' because 1 is converted to the boolean 'true'
console.log(Boolean(0)); // This will log 'false' because 0 is converted to the boolean 'false'
console.log(Boolean(123)); // This will log 'false' because null is converted to the boolean 'false'
console.log(Boolean("")); // This will log 'false' because an empty string is converted to the boolean 'false'
console.log(Boolean("Hello")); // This will log 'true' because a non-empty string is converted to the boolean 'true'
console.log(Boolean(undefined)); // This will log 'true' because an empty array is converted to the boolean 'true'
