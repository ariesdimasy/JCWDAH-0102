import * as myModule from "./module"

let jsonString = `{"students":[{"name":"dimas"}]}`
let json = JSON.parse(jsonString)
console.log(json)
console.log(json.students[0].name)

let jsonStringAgain = JSON.stringify(json)

console.log(jsonStringAgain)

console.log(" data from module => ", myModule.data)