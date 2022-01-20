function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let k = 1; k < t * 2; k = k + 2) {
        var len = +arr[k].trim()
        var data = arr[k + 1].trim().split(" ").map(Number);
        var count = 0;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (data[j] == 2 * data[i]) {
                    count++
                }
            }

        }
        console.log(count);
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    5
    1 1 1 1 1
    6
    1 1 2 2 4 1 `);
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