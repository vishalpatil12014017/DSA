function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim();
    var data = arr[1].trim().split(" ").map(Number)
    var q = +arr[2].trim();
    var sum = [];
    var res = 0
    for (let p = 0; p < len; p++) {
        res += data[p]
        sum.push(res)
    }
    for (let p = 3; p < q + 3; p++) {
        var [start, end] = arr[p].trim().split(" ").map(Number);
        if (start == end) {
            console.log(data[start - 1]);
        } else if (start == 1) {
            console.log(sum[end - 1]);
        } else {
            console.log(sum[end - 1] - sum[start - 2]);
        }

    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`4
    3 2 1 5
    4
    1 3
    2 4
    1 4
    3 3`);
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