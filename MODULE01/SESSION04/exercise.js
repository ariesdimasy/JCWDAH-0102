function triangel(height) {
    // let res = ""
    // res = res + 1 + " "
    // console.log(res)
    // res = res + 2 + " "
    // console.log(res)
}
triangel(5);
function findMax(arr) {
    var max = arr[0]; // 1
    for (var i = 1; i < arr.length; i++) {
        // 2 > 1 
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1, 2, 7, 10, 4, 5]));
console.log(findMax([10, 55, 79, 32]));
// current item = 7 
// max = 10
// apakah currnt item > max 
// jika lebih besar maka : 
// max = current item 
/*
i = 1
height = 5
counter = 0
result = ""

console 1
   01 looping 1 kali  karena i = 1

console 2
   02 03 looping 2 kali karena i = 2

console 3
   04 05 06 looping 3 kali karena i = 3

FOR i = 1 sampai i <= height
   FOR j = 1 sampai i --> 2
      counter += 1 --> 3
      02
      result += 0 + counter + " " --> 03
   END FOR
   PRINT result
END FOR

01
02 03
*/
function triangel2(height) {
    var counter = 0;
    for (var i = 1; i <= height; i++) {
        var result = ""; //
        for (var j = 1; j <= i; j++) {
            counter += 1;
            result += "" + 0 + counter + " ";
        }
        console.log(result); // 01 
    }
}
triangel2(5);
function fizzBuzz(fizz, buzz) {
    for (var i = 1; i <= 100; i++) {
        if (i % fizz === 0 && i % buzz === 0) {
            console.log(i, ':', "FizzBuzz");
        }
        else if (i % fizz === 0) {
            console.log(i, ':', 'fizz');
        }
        else if (i % buzz === 0) {
            console.log(i, ':', "buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(3, 5);
/*
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz


*/
function removeOddNumber(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]); // 1
        }
    }
    return result;
}
// 0, 1, 2, 3, 4, 5, 6, 7
console.log(removeOddNumber([1, 2, 3, 4, 5, 7, 8, 9])); // [2,4,8]
