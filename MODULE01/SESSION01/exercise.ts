let x: number = 10
let y: number = 5
let result = x * y;
console.log(result); // 50

let radius: number = 5;
let diameter: number = radius * 2;
console.log(diameter); // 10
let area: number = Math.PI * radius * radius;
console.log(area); // 78.5
let circumference: number = 2 * Math.PI * radius;
console.log(circumference); // 31.4

let triangle: number = 180;
let a: number = 80;
let b: number = 65;
let result2: number = triangle - (a + b);
console.log(result2); // 35

let days: number = 366;
let years: number = Math.floor(days / 365);

let leftoverDays: number = days % 365;
let months: number = Math.floor(leftoverDays / 30);
let monthsLeft: number = leftoverDays % 30;
// template literal string , yang menggunakan backtic 
console.log(` ${years} Years `); // 1
console.log(` ${months} Months `); // 1
console.log(` ${monthsLeft} Days `); // 5

console.log(Math.floor(34.56)) // 34
console.log(Math.ceil(34.26)) // 35
console.log(Math.ceil(34.56))
console.log(Math.round(34.56)) // 35
console.log(Math.round(34.26)) // 34

let date1: Date = new Date("2023-10-20");
let date2: Date = new Date("2023-10-22");
let timeDifference: number = date2.getTime() - date1.getTime();
console.log(timeDifference); // 172800000 (milliseconds)
let daysDifference: number = timeDifference / (1000 * 60 * 60 * 24);
console.log(daysDifference); // 2