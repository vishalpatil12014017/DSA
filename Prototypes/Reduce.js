Array.prototype.myReduce = function (callback, initial) {
    var previous;
    if (initial) {
        previous = initial;
        for (var i = 0; i < this.length; i++) {
            previous = callback(previous, this[i], i, this);
        }
    } else {
        previous = this[0];
        for (var i = 1; i < this.length; i++) {
            previous = callback(previous, this[i], i, this);
        }
    }
    return previous;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const newArr = arr.myReduce((acc, curr) => {
    return acc + curr;
});

console.log(newArr);