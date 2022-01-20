//we can take multiple occurance
function runProgram(input) {
    input = input.trim().split("\n");
    let w = +input[0].trim();
    let len = +input[1].trim();
    let price = input[2].trim().split(" ").map(Number)
    let weight = input[3].trim().split(" ").map(Number)
    knapsackdp(weight, price, w, len)
}
function knapsackdp(item, value, w, n) {
    let dp = Array(15 + 1).fill(0).map(x => Array(20 + 1).fill(0))
    let ans=[]
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= w ; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 0
            }
            else if (item[i - 1] <= j) {
                dp[i][j] = Math.max((value[i - 1] + dp[i][j - item[i - 1]]), (dp[i - 1][j]))
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    console.log(dp);
    console.log(dp[n][w]);
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`50 
    3
    60 120 200
    10 30 20`);
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