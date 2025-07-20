var listProduct = [
    {
        name: "Mouse Logitech B100",
        price: 90000
    }, {
        name: "Keyboard Logitech MK1200",
        price: 120000
    },
    {
        name: "LGA 775 Fan",
        price: 45000
    }, {
        name: "VGA Colorful 712 2GB",
        price: 600000
    }
];
function buy(money, product, callback) {
    var leftMoney = money - product.price;
    console.log("You buy ", product.name, " price ", product.price, ".");
    console.log("your left money is ", leftMoney);
    callback ? callback(leftMoney) : undefined;
}
buy(5000000, listProduct[1], function (leftMoney) {
    var res = leftMoney - listProduct[0].price;
    console.log("You buy ", listProduct[0].name, " price ", listProduct[0].price, ".");
    console.log("your left money is ", res);
    buy(res, listProduct[3], function (leftMoney) {
        var res = leftMoney - listProduct[3].price;
        console.log("You buy ", listProduct[3].name, " price ", listProduct[3].price, ".");
        console.log("your left money is ", res);
    });
});
