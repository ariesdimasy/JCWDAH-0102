interface IUser {
    david: string
    beckam: string
}

let user: IUser = {
    david: "001",
    beckam: "002"
}

console.log(user)

let myUser = new Map()

myUser.set("Aries", "001")
myUser.set("Dimas", "002")

console.log(myUser)

console.log(myUser.get("Aries"))