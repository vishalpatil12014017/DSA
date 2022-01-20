Array.prototype.myFilter = function (callback) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};
const arr = [1, 2, 3, 4, 5, 6, 7];
const newArr = arr.myFilter((x) => {
    if (x % 2 == 0) return x
});
console.log(newArr);