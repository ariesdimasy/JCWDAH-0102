class User {
    firstName: string = "Aries"
    lastName: string = "Dimas"

    set setFirstName(firstName: string) {
        if (firstName.length >= 3) {
            this.firstName = firstName
        } else if (typeof firstName != "string") {
            console.log("firstname harus string")
        }

        else {
            console.log("char nama harus 3 char lebih")
        }

    }

    get getFirstName() {
        return this.firstName
    }

    set setLastName(ln: string) {
        this.lastName = ln
    }

    get getLastName() {
        return this.lastName
    }
}

let user1 = new User()

// console.log(user1.getFirstName())
user1.setFirstName = "Nabila"

// console.log(user1.fullName())
console.log(user1.getFirstName)

// user1.firstName = "L"

user1.setFirstName = "L"

console.log(user1)