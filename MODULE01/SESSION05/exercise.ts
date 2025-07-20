function basicStatistic(arr: number[]) {
    let highest = arr[0]
    let lowest = arr[0]
    let average = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i]
        }
        if (arr[i] < lowest) {
            lowest = arr[i]
        }
        average += arr[i]
    }

    average = average / arr.length
    return {
        highest, lowest, average
    }
}

console.log(basicStatistic([12, 5, 23, 18, 4, 45, 32]))
// let highest = 12
function arrayToString(arr: string[]) {
    let result = ""
    for (let i = 0; i < arr.length; i++) {
        //result += arr[i] + ", "
        if (i === arr.length - 1) {
            result += "and " + arr[i]
        } else {
            result += arr[i] + ", "
        }
    }
    return result
}

console.log(arrayToString(["Mera Mera", "Ope Ope", "Pika Pika"]));
console.log(arrayToString(["Nika", "Buddha", "Uo Uo", "Ushi Ushi"]));
// Mera Mera, Ope Ope and Pika Pika 

function calculateArray(arr1: number[], arr2: number[]) {
    let newArr: number[] = []

    for (let i = 0; i < arr1.length; i++) {
        let res = arr1[i] + arr2[i]
        newArr.push(res)
    }

    return newArr
}

console.log(calculateArray([1, 2, 3], [3, 2, 1]))
console.log(calculateArray([3, 5, 1, 4], [3, 2, 1, 6]))

function addNewElement(arr: number[], newElement: number) {

    let isExists = false
    for (let i = 0; i < arr.length; i++) {
        if (newElement === arr[i]) {
            isExists = true
            //return arr
            break;
        }
    }

    if (isExists == false) {
        arr.push(newElement)
    }

    return arr
}

console.log(addNewElement([1, 2, 3, 4, 8, 5], 4))
console.log(addNewElement([1, 2, 3, 4], 7))

function test() {
    console.log('hello')
    return true
    console.log('world')
}

function mixedArray(arr: any) {
    let res: number = 0

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            res += arr[i]
        }
    }

    return res
}

console.log(mixedArray([true, 1, "hello", null, 2, "tujuh"]))