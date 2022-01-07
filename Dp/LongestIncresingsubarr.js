function runProgram(input) {
    input = input.trim().split("\n");
    var t = +input[0].trim();
    for (let k = 1; k < t * 2; k = k + 2) {
        var len = +input[k].trim();
        var data = input[k + 1].trim().split(" ").map(Number)
        var max = 0
        var current = -100;
        for (let i = 0; i < len; i++) {
            if (data[i] <= max + data[i]) {
                max += data[i];
            }
            else {
                max = data[i];
            }
            if (max > current) {
                current = max;
            }
        }

       console.log(current);
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    3
    1 2 3
    4
    -1 -1 0 1
    3
    2 -1 2`);
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
