function runProgram(input) {
    var data = +input.trim()

    let dp = Array(data + 1).fill(-1)
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    function Ways(n) {
        if (dp[n] != -1) {
            return dp[n]
        }
        for (let i = 3; i <= n; i++) {
            dp[i] = Ways(i - 1) + Ways(i - 2) + Ways(i - 3)

        }
        return dp[n]
    }
    console.log(Ways(data));
}

if (process.env.USERNAME === "Vishal") {
    runProgram(`4`);
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