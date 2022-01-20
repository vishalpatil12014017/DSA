function runProgram(input) {
    var arr = input.split("\n");
    var str1 = arr[0].trim().split("")
    var str2 = arr[1].trim().split("")
    var m = str1.length;
    var n = str2.length
    let dp = Array(m + 1).fill(-1).map(x => Array(n + 1).fill(-1))
    function knapsackdp(str1, str2, m, n) {
        if (n == 0 || m == 0) {
            return 0
        }
        if (dp[m][n] != -1) {
            return dp[m][n]
        }
        if (str1[m - 1] == str2[n - 1])
            return dp[m][n] = 1 + knapsackdp(str1, str2, m - 1, n - 1)
        else {
            return dp[m][n] = Math.max(knapsackdp(str1, str2, m - 1, n), knapsackdp(str1, str2, m, n - 1))
        }
    }

    console.log(knapsackdp(str1, str2, m, n));
    console.log(dp);
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`AHBC
    AFCH`);
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