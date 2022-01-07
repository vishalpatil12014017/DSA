
function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim();
    for (let p = 1; p < t * 2; p = p + 2) {
        var [len, k] = arr[p].trim().split(" ").map(Number)
        var data = arr[p + 1].trim().split(" ").map(Number)
        var sum = 0;
        var start = 0
        var count = 0
        for (let i = 0; i < len; i++) {
            sum = sum + data[i]
            while (sum > k) {
                sum = sum - data[start];
                start++
            }
            count = count + i - start + 1
        }
        console.log(count);
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`1
    7 20
    2 6 4 3 6 8 9
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