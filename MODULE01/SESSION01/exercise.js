var x = 10;
var y = 5;
var result = x * y;
console.log(result); // 50
var radius = 5;
var diameter = radius * 2;
console.log(diameter); // 10
var area = Math.PI * radius * radius;
console.log(area); // 78.5
var circumference = 2 * Math.PI * radius;
console.log(circumference); // 31.4
var triangle = 180;
var a = 80;
var b = 65;
var result2 = triangle - (a + b);
console.log(result2); // 35
var days = 366;
var years = Math.floor(days / 365);
var leftoverDays = days % 365;
var months = Math.floor(leftoverDays / 30);
var monthsLeft = leftoverDays % 30;
// template literal string , yang menggunakan backtic 
console.log(" ".concat(years, " Years ")); // 1
console.log(" ".concat(months, " Months ")); // 1
console.log(" ".concat(monthsLeft, " Days ")); // 5
console.log(Math.floor(34.56)); // 34
console.log(Math.ceil(34.26)); // 35
console.log(Math.ceil(34.56));
console.log(Math.round(34.56)); // 35
console.log(Math.round(34.26)); // 34
var date1 = new Date("2023-10-20");
var date2 = new Date("2023-10-22");
var timeDifference = date2.getTime() - date1.getTime();
console.log(timeDifference); // 172800000 (milliseconds)
var daysDifference = timeDifference / (1000 * 60 * 60 * 24);
console.log(daysDifference); // 2
