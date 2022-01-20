function runProgram(input) {
    var arr = input.split("\n");
    var str1 = arr[0].trim().split("")
    var str2 = arr[1].trim().split("")
    var dp = Array(str1.length + 1).fill().map(() => Array(str2.length + 1).fill(0));
    var result = 0
    for (i = 0; i <= str1.length; i++) {
        for (j = 0; j <= str2.length; j++) {
            if (i == 0 || j == 0)
                dp[i][j] = 0;
            else if (str1[i - 1] == str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                result = Math.max(result, dp[i][j]);
            }
            else {
                dp[i][j] = 0;
            }
        }
    }
    var k = str1.length
    var r = str2.length
    var ans = []
    while (k > 0 && r > 0) {
        if (str1[k - 1] == str2[r - 1]) {
            ans.push(str1[k - 1])
            k--;
            r--;
        }
        else {
            if (dp[k][r - 1] > dp[k - 1][r]) {
                r--
            } else {
                k--
            }
        }
    }
    console.log(ans.reverse().join(""));

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`pabfcd
    abdfc`);
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