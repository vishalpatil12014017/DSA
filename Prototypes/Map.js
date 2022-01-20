Array.prototype.myMap = function (map) {
    var myarr = [];
    for (var i = 0; i < this.length; i++) {
        myarr.push(map(this[i], i, this));
    }
    return myarr;
};
const arr = [
    1, 2, 3, 4, 5, 6, 7
];
const newArr = arr.myMap((x) => x + 10)
console.log(newArr);