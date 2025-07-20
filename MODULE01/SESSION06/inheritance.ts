class Product {

    name: string
    price: number

    constructor (name: string, price: number) {
        this.name = name
        this.price = price
    }
}

class Book extends Product {

    author: string

    constructor (name: string, price: number, author: string) {
        super(name, price)
        this.author = author
    }
}

let product1 = new Product("msi RTX 3060 12GB", 6000000)

console.log(product1)

let book1 = new Book("Jangan Pintar, terus bodoh", 50000, "Tere Liye")

console.log(book1)

console.log(book1 instanceof Book)
console.log(product1 instanceof Book)
console.log(book1 instanceof Product)