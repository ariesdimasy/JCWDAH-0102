interface IHuman {
    name: string
}

class Human {

    constructor (name: string) {
        this.name = name
    }

    public name: string
    protected age: number
    private isRahasia: boolean
    greeting() {
        console.log("Hello, ", this.name)
    }
    static learning() {
        console.log("Iam Leraning")
    }
}


const Human2 = class {
    name: string
}

let dimas = new Human("Dimas") // object baru terbuat
let rizky = new Human("Rizky") // object baru terbuat

// dimas.name = "dimas"
// rizky.name = "rizky"

console.log(dimas)
console.log(rizky)

dimas.greeting()
rizky.greeting()

// console.log(dimas.age)
console.log(dimas)
// console.log(dimas.learning())
// console.log(dimas.isRahasia)
// dimas.learning()
Human.learning()