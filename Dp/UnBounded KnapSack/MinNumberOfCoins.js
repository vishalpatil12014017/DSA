//we can take multiple occurance
function runProgram(input) {
    input = input.trim().split("\n");
    let [len, sum] = input[0].trim().split(" ").map(Number)
    let coin = input[1].trim().split(" ").map(Number)
    knapsackdp(sum, coin)
}
function knapsackdp(sum, coin) {
    var dp = [];
    for (let i = 0; i <= coin.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= sum; j++) {
            if (i == 0) {
                dp[i][j] = Infinity - 1
            }
            if (j == 0) {
                dp[i][j] = 0
            }
            if (j % coin[0] == 0) {
                dp[i][j] = j / coin[0]
            }
            else {
                dp[i][j] = Infinity - 1
            }

        }
    }
    for (var i = 1; i <= coin.length; i++) {
        for (var j = 1; j <= sum; j++) {
            if (coin[i - 1] <= j) {
                dp[i][j] = Math.min(dp[i][j - coin[i - 1]] + 1, dp[i - 1][j])
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    console.log(dp[coin.length][sum]);
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`1 1
    1000000`);
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
