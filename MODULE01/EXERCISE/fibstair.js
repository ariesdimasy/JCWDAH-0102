function fibstair(stairCount) {
    var firstNumber = 1;
    var secondNumber = 2;
    for (var i = 3; i <= stairCount; i++) {
        var total = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = total;
        // console.log(i, firstNumber, secondNumber)
    }
    if (stairCount == 1) {
        return firstNumber;
    }
    return secondNumber;
}
console.log(fibstair(1)); // 1
console.log(fibstair(2)); // 1
console.log(fibstair(3)); // 1
console.log(fibstair(4)); // 1
console.log(fibstair(5)); // 8
