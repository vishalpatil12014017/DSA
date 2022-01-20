function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (var k = 1; k < t * 2 + 1; k = k + 2) {
        var len = +arr[k].trim()
        var data = arr[k + 1].trim();
        let low = 0;
        let high = len - 1;
        let res = "";
        console.log(Encrypt(data, low, high, res));
    }
}
function Encrypt(data, low, high, res) {
    if (low > high) {
        return res;
    } else {
        let Mid = low + Math.floor((high - low) / 2)
        return res + data[Mid] + Encrypt(data, low, Mid - 1, res) + Encrypt(data, Mid + 1, high, res)
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    3
    abc
    4
    abcd
    50
    rscdrregojwcpsxpfjlxbksvulbsugewwxaresuhkokbpslskx`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}