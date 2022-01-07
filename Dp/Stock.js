function runProgram(input) {
    input = input.trim().split("\n");
    var t = +input[0].trim();
    for (let k = 1; k < t * 2; k = k + 2) {
        var len = +input[k].trim();
        var data = input[k + 1].trim().split(" ").map(Number)
        var max = 0
        for (let i = 0; i < len - 1; i++) {
            let ans = data[i]
            // data.shift()
            data.splice(i,i+1)
            console.log(data);
            var value = Math.max(...data) - ans
            if (value > max) {
                max = value
            }
        }
        // console.log(max);
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`4
    6
    7 4 5 3 6 2
    4
    4 3 2 1
    6
    7 4 5 3 6 7
    4
    4 3 2 1
    `);
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
