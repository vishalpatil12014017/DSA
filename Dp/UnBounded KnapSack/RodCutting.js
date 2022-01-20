//we can take multiple occurance
function runProgram(input) {
    input = input.trim().split("\n");
    let len = +input[0].trim();
    let price = input[1].trim().split(" ").map(Number)
    let lengthOfRod = input[2].trim().split(" ").map(Number)
    knapsackdp(lengthOfRod, price, len)
}
function knapsackdp(lengthOfRod, price, len) {
    let dp = Array(lengthOfRod.length + 1).fill(-1).map(x => Array(len + 1).fill(-1))
    for (let i = 0; i <=lengthOfRod.length; i++) {
        for (let j = 0; j <= len; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 0
            }
            else if (lengthOfRod[i - 1] <= j) {
                dp[i][j] = Math.max((price[i - 1] + dp[i][j - lengthOfRod[i - 1]]), (dp[i - 1][j]))
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    console.log(dp);
    console.log(dp[lengthOfRod.length][len]);
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`8
    8 9 5
    3 4 2`);
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