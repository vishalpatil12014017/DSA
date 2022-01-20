function runProgram(input) {
    var arr = input.split("\n");
    var n = +arr[0].trim();
    var dp = []
    for (let i = 0; i < n; i++) {
        dp.push(-1)
    }
    console.log(dp);
    function total(n) {
        if (n == 0) return 1;
        if (n < 0) return 0;
        return (total(n - 1) + total(n - 3) + total(n - 4))
    }
    console.log(total(n))
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5`);
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