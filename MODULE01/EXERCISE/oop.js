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
var Employee = /** @class */ (function () {
    function Employee(type) {
        this.type = type;
    }
    return Employee;
}());
var FulltimeEmployee = /** @class */ (function (_super) {
    __extends(FulltimeEmployee, _super);
    function FulltimeEmployee() {
        var _this = _super.call(this, "Fulltimer") || this;
        _this.salary = 100000;
        _this.salaryOT = 75000;
        return _this;
    }
    FulltimeEmployee.prototype.addHour = function (hour) {
        this.hour = hour;
    };
    FulltimeEmployee.prototype.calculateTotalSalary = function () {
        if (this.hour > 6) {
            var sixHour = 6 * this.salary;
            this.totalSalary = sixHour + ((this.hour - 6) * this.salaryOT);
        }
        else {
            this.totalSalary = this.hour * this.salary;
        }
    };
    return FulltimeEmployee;
}(Employee));
var ParttimeEmployee = /** @class */ (function (_super) {
    __extends(ParttimeEmployee, _super);
    function ParttimeEmployee() {
        var _this = _super.call(this, "Partimer") || this;
        _this.salary = 50000;
        _this.salaryOT = 30000;
        return _this;
    }
    ParttimeEmployee.prototype.addHour = function (hour) {
        this.hour = hour;
    };
    ParttimeEmployee.prototype.calculateTotalSalary = function () {
        if (this.hour > 6) {
            var sixHour = 6 * this.salary;
            this.totalSalary = sixHour + ((this.hour - 6) * this.salaryOT);
        }
        else {
            this.totalSalary = this.hour * this.salary;
        }
    };
    ParttimeEmployee.testing = function () {
        console.log("static method testing");
    };
    return ParttimeEmployee;
}(Employee));
var dimas = new FulltimeEmployee();
dimas.addHour(9);
dimas.calculateTotalSalary();
console.log(dimas);
var dian = new ParttimeEmployee();
dian.addHour(7);
dian.calculateTotalSalary();
console.log(dian);
ParttimeEmployee.testing();
var str = "dimas".toUpperCase();
console.log(str);
console.log(str.toLowerCase());
console.log(str);
str = str.split("");
console.log(str); // []
