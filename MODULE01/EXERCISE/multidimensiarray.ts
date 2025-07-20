let arr = [1, 2, 3, 4, 6]

console.table(arr)

/* 
dimensi ke 0 : titik : variable primitif ( string, number, boolean )
dimensi ke 1 : garis : array dan object 
dimensi ke 2 : bidang datar
dimensi ke 3 : 
dimensi ke 4
dimensi ke 5
*/

let arr2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15],
[16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]

console.table(arr2)
console.log(arr2[1][0])
console.log(arr2[3][3])


console.log(" ===== ")

for (let i = 0; i < arr2[0].length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
        console.log(arr2[i][j])
    }
}

arr2[4][0] = 80

console.table(arr2)

for (let i = 0; i < arr2[0].length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
        arr2[i][j] = 1

    }
}

console.table(arr2)

let res = 25
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        arr2[i][j] = res
        res--
    }
}

console.table(arr2)

let arr3: number[][] = []
let counter = 1

// let ar1: number[] = []
// ar1.push(counter++)
// ar1.push(counter++)
// ar1.push(counter++)
// arr3.push(ar1)

// let ar2: number[] = []
// ar2.push(counter++)
// ar2.push(counter++)
// ar2.push(counter++)
// arr3.push(ar2)
// // arr3.push([])

for (let i = 0; i < 3; i++) {
    let ar: number[] = []
    for (let j = 0; j < 3; j++) {
        ar.push(counter++)
    }
    arr3.push(ar)
}

console.table(arr3)

function searchMultidimensi(arr, needle) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] === needle) {
                return [i, j]
            }
        }
    }
    return -1
}

console.log(searchMultidimensi(arr3, 7)) // [2,0]





