
Array.prototype.myForEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
const arr = [
    1, 2, 3, 4, 5, 6, 7
];
arr.myForEach((x) => {
    console.log(x);
})