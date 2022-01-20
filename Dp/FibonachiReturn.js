function runProgram(input) {
    var arr = Number(input.trim())
    let dp = Array(arr + 1).fill(-1)
    dp[0] = 0;
    dp[1] = 1
    function fibo(n, dp) {
        if (dp[n] != -1) {
            return dp[n]
        } else {
            dp[n] = fibo(n - 1, dp) + fibo(n - 2, dp)
            return dp[n]
        }

    }
    console.log(fibo(arr, dp));
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