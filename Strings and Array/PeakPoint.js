function runProgram(input) {
    input = input.trim().split("\n");
    var t = +input[0].trim();
    for (let k = 1; k < t * 2; k = k + 2) {
        var len = +input[k].trim();
        var data = input[k + 1].trim().split(" ").map(Number)
        for (let i = 1; i < len; i++) {
            if (data[i] < data[i - 1]) {
                console.log(i-1);
                break
            }

        }

    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    3
    10 20 11
    5
    1 3 6 5 4`);
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
