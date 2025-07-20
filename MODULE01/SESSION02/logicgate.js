console.log(3 < 5 && 4 >= 8); // false
console.log(4 <= 4 && 5 > 2); // true
console.log(3 < 5 || 4 >= 8); // true
console.log(4 <= 4 || 5 > 2); //  true
console.log((3 < 5 && 4 >= 8) && (4 <= 4 || 5 > 2)); // false 
console.log((3 < 5 || 4 >= 8) || (4 <= 4 || 5 > 2)); // true
console.log(!(2 > 1));
console.log(!true);
var car = "BMW";
if (car == "BMW" || car == "toyota") {
    console.log("".concat(car, " is awesome"));
}
