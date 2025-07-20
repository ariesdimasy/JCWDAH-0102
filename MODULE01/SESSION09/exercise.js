function anagram(t1, t2) {
    var arrT1 = t1.split("");
    var arrT2 = t2.split("");
    var sortT1 = arrT1.sort();
    var sortT2 = arrT2.sort();
    var resT1 = sortT1.join("");
    var resT2 = sortT2.join("");
    return resT1 == resT2;
}
console.log(anagram("nagaram", "anagram")); // true
console.log(anagram("iam lord voldemort", "tom marvolo riddle"));
function singelNumber(arr) {
    for (var i = 0; i < arr.length; i++) {
        var find = false;
        for (var j = i + 1; j < arr.length; j++) {
            //.   1    == 2      &&   1.   != null && 2  != nill 
            if (arr[i] == arr[j] && arr[i] != null && arr[j] != null) {
                arr[i] = null;
                arr[j] = null;
                console.log(" i ", i);
                find = true;
            }
        }
        console.log(arr, i);
        if (find === false) {
            return arr[i];
        }
    }
    console.log(arr);
    return -1;
}
console.log(singelNumber([2, 2, 1]));
console.log(singelNumber([4, 2, 5, 4, 2]));
