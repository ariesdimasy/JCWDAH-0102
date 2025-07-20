function fibstair(stairCount) {

    let firstNumber = 1
    let secondNumber = 2

    if (stairCount == 1) {
        return firstNumber
    }

    for (let i = 3; i <= stairCount; i++) {
        let total = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = total

        // console.log(i, firstNumber, secondNumber)
    }

    return secondNumber
}

console.log(fibstair(1)) // 1
console.log(fibstair(2)) // 1
console.log(fibstair(3)) // 1
console.log(fibstair(4)) // 1
console.log(fibstair(5)) // 8