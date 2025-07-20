interface IQueue {
    dequeue: () => void
    enqueue: () => void
}

class Queue {

    queue: number[]
    maxSize: number

    constructor (maxSize: number = 5) {
        this.queue = []
        this.maxSize = maxSize
    }

    dequeue() {
        if (this.queue.length <= 0) {
            console.log("Queue is undefflow")
            return
        }

        this.queue.shift()
    }

    enqueue(input: number) {
        if (this.queue.length >= this.maxSize) {
            console.log("Queue is overflow")
            return
        }

        this.queue.push(input)
    }

    display() {
        console.log(this.queue)
    }
}

let q1 = new Queue(3)

q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.display()
q1.enqueue(5)
q1.dequeue()
q1.display()