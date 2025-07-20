/*

1 : 1-26 
2 : 26 - 26*26


A-Z : 26^1
AA-ZZ: 26*26 + 26^1
AAA - ZZZ : 26*26*26 + 26*26 + 26^1
AAAA - ZZZZ : 26^4 + 26^3 + 26^2 + 26^1

B : 2
AD : (1 * 26^1) + 4 
CD : (3 * 26^1) + 4 --> A -> Z = 26 , AA-> AZ = 26 , BA -> BZ = 26, CA - > CD = 4 
FG : (F * 26^1) + 7 * 26^0

ABC : (1 * 26^2) + (2 * 26^1) + (3 * 26^0)
ABCD : () + () + 
ABCDE : () 
*/

let column = "A" // 3 
let abjad = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let abcSplit: string[] = abjad.split("")
let result = 0
let counterPow = column.length - 1// 2-1

for (let i = 0; i < column.length; i++) {

    let indexAbc = 0
    for (let j = 0; j < abcSplit.length; j++) {
        if (abcSplit[j] === column[i]) {
            indexAbc = j
            break;
        }
    }
    // console.log(i, indexAbc)
    result = result + (indexAbc * (26 ** counterPow))
    counterPow--
}

console.log(result)

