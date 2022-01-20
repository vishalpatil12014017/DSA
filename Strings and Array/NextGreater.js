function runProgram(input) {
    input = input.trim().split("\n");
    var t = +input[0].trim();
    for (let k = 1; k < t * 2; k = k + 2) {
        var len = +input[k].trim();
        var data = input[k + 1].trim().split(" ").map(Number)
        var res = ""
        for (let i = 0; i < len; i++) {
            var next=-1
            for (let j = i + 1; j < len; j++) {
                if (data[j] > data[i]) {
                    next=data[j]
                    break
                }
            }
            res += next + " ";

        }
        console.log(res.trim());

    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`1
    4
    4 3 6 7 8`);
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
