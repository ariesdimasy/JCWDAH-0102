var User = /** @class */ (function () {
    function User() {
        this.firstName = "Aries";
        this.lastName = "Dimas";
    }
    Object.defineProperty(User.prototype, "setFirstName", {
        set: function (firstName) {
            if (firstName.length >= 3) {
                this.firstName = firstName;
            }
            else {
                console.log("char nama harus 3 char lebih");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setLastName", {
        set: function (ln) {
            this.lastName = ln;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getLastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user1 = new User();
// console.log(user1.getFirstName())
user1.setFirstName = "Nabila";
// console.log(user1.fullName())
console.log(user1.getFirstName);
// user1.firstName = "L"
user1.setFirstName = "L";
console.log(user1);
