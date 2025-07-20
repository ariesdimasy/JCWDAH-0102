var arr = [1, 2, 3, 4, 5, 6];
arr = arr.map(function (item) {
    return item * 2;
});
console.log(arr);
arr.forEach(function (item) {
    console.log(item);
});
