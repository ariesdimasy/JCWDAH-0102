var Queue = /** @class */ (function () {
    function Queue(maxSize) {
        if (maxSize === void 0) { maxSize = 5; }
        this.queue = [];
        this.maxSize = maxSize;
    }
    Queue.prototype.dequeue = function () {
        if (this.queue.length <= 0) {
            console.log("Queue is undefflow");
            return;
        }
        this.queue.shift();
    };
    Queue.prototype.enqueue = function (input) {
        if (this.queue.length >= this.maxSize) {
            console.log("Queue is overflow");
            return;
        }
        this.queue.push(input);
    };
    Queue.prototype.display = function () {
        console.log(this.queue);
    };
    return Queue;
}());
var q1 = new Queue(3);
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.display();
q1.enqueue(5);
q1.dequeue();
q1.display();
