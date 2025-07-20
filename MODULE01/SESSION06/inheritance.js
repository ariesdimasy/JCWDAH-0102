var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(name, price, author) {
        var _this = _super.call(this, name, price) || this;
        _this.author = author;
        return _this;
    }
    return Book;
}(Product));
var product1 = new Product("msi RTX 3060 12GB", 6000000);
console.log(product1);
var book1 = new Book("Jangan Pintar, terus bodoh", 50000, "Tere Liye");
console.log(book1);
console.log(book1 instanceof Book);
console.log(product1 instanceof Book);
console.log(book1 instanceof Product);
