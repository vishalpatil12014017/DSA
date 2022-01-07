function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim();
    for (let p = 1; p < t * 2; p = p + 2) {
        var len = +arr[p].trim();
        var data = arr[p + 1].trim().split(" ").map(Number)
        var current = 0;
        var start = 0;
        var res = 1;
        var obj = {};
        var length = 0
        while (current < len) {
            if (obj[data[current]] == undefined) {
                obj[data[current]] = 1
                length++
                current++
            } else {
                delete (obj[data[start]])
                length--
                start++
            }
            res = Math.max(length, res)
        }
        console.log(res);
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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