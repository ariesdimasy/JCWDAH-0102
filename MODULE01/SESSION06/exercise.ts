class Student {
    name: string
    email: string
    score: number
    age: Date

    constructor (name: string, email: string, score: number, age: Date) {
        this.name = name
        this.email = email
        this.score = score
        this.age = age
    }
}

let s1 = new Student("Dimas", "dimas@gmail.com", 89, new Date("09-08-1992"))
let s2 = new Student("Rifky", "rifky@gmail.com", 97, new Date("04-09-1990"))
let s3 = new Student("Mahdi", "mahdi@gmail.com", 77, new Date("07-10-1980"))

let students = [s1, s2, s3]

console.log(students)

function getStudentStatistic(students: Student[]) {

    let res = {
        score: {
            highest: students[0].score,
            lowest: students[0].score,
            average: 0
        }, age: {
            highest: students[0].age,
            lowest: students[0].age,
            average: 0
        }
    }

    let totoalSCore = 0

    for (let i = 1; i < students.length; i++) {
        if (students[i].score > res.score.highest) {
            res.score.highest = students[i].score
        }
        if (students[i].score < res.score.lowest) {
            res.score.lowest = students[i].score
        }

        if (students[i].age < res.age.highest) {
            res.age.highest = students[i].age
        }
        if (students[i].age > res.age.lowest) {
            res.age.lowest = students[i].age
        }

        totoalSCore += students[i].score
    }

    res.score.average = (totoalSCore / students.length)

    return res
}

console.log(getStudentStatistic(students))