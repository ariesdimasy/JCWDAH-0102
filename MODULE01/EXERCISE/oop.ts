class Employee {
    type: string
    totalSalary: number
    hour: number
    constructor (type: string) {
        this.type = type
    }
}

class FulltimeEmployee extends Employee {
    salary: number = 100000
    salaryOT: number = 75000
    constructor () {
        super("Fulltimer")
    }

    addHour(hour: number) {
        this.hour = hour
    }

    calculateTotalSalary() {
        if (this.hour > 6) {
            let sixHour = 6 * this.salary
            this.totalSalary = sixHour + ((this.hour - 6) * this.salaryOT)
        } else {
            this.totalSalary = this.hour * this.salary
        }
    }

}

class ParttimeEmployee extends Employee {
    salary: number = 50000
    salaryOT: number = 30000
    constructor () {
        super("Partimer")
    }

    addHour(hour: number) {
        this.hour = hour
    }

    calculateTotalSalary() {
        if (this.hour > 6) {
            let sixHour = 6 * this.salary
            this.totalSalary = sixHour + ((this.hour - 6) * this.salaryOT)
        } else {
            this.totalSalary = this.hour * this.salary
        }
    }

    static testing() {
        console.log("static method testing")
    }

}

let dimas = new FulltimeEmployee()
dimas.addHour(9)
dimas.calculateTotalSalary()

console.log(dimas)

let dian = new ParttimeEmployee()
dian.addHour(7)
dian.calculateTotalSalary()

console.log(dian)

ParttimeEmployee.testing()

let str = "dimas".toUpperCase()
console.log(str)
console.log(str.toLowerCase())
console.log(str)

str = str.split("")
console.log(str) // []
