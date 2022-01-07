function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let p = 1; p < t * 2 + 1; p = p + 2) {
        var str1 = arr[p].trim().split("")
        var str2 = arr[p + 1].trim().split("")
        var m = str1.length;
        var n = str2.length
        var dp = Array(m + 1).fill(-1).map(x => Array(n + 1).fill(-1));
        for (var i = 0; i <= m; i++) {
            for (var j = 0; j <= n; j++) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 0;
                }
                else if (str1[i - 1] == str2[j - 1])
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }

            }
        }
        console.log(Math.max(m,n)-dp[m][n]);
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    aaaaaaaaaaaaaaaaaaaaaaaXaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaXaaaaaaaaaaaaaaaaXaaaaaaaaaaaaaaaaaaaaXaaaaaaX
    aaaaaaaaaaaaaaaaaaaaaaabccccccbaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaabccccccbaaaaaaaaaaaaaaaaaa
    aaabbb---ddd
    aaabbb+++ddd`);
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