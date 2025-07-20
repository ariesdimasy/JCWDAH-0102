var arr = [1, 2, 3, 4, 5];
console.log(arr);
arr[3] = 8;
console.log(arr);
console.log(arr.length);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// arr[0] = arr[0] * 2;
// arr[1] = arr[1] * 2;
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
}
console.log(arr);
var drinks = ["kopi", 'teh'];
var temp = "";
temp = drinks[1];
drinks[1] = drinks[0];
drinks[0] = temp;
console.log(drinks); // ["teh", 'kopi']
var test = [true, false, false, true];
var students = [
    {
        name: "dimas",
        email: "ariesdimasy@gmail.com"
    }
];
console.log(students);
drinks.push("Cappucino");
console.log(drinks);
drinks.pop();
console.log(drinks);
var drinksFilter = drinks.filter(function (item) {
    return item == 'kopi';
});
console.log(drinksFilter);
var twiceArr = arr.map(function (item) {
    return item * 2;
});
console.log(twiceArr);
var sortArr = arr.sort(function (a, b) { return a - b; });
var sort1 = arr.sort();
console.log(sort1);
for (var _i = 0, sort1_1 = sort1; _i < sort1_1.length; _i++) {
    var item = sort1_1[_i];
    console.log(item);
}
