function runProgram(input) {
    input = input.trim().split("\n");
    let test = +input[0].trim();
    let line = 1;
    for (let k = 0; k < test; k++) {
        let [w, n] = input[line++].trim().split(" ").map(Number);
        let item = [];
        let value = [];
        for (let r = 0; r < n; r++) {
            let [item1, value1] = input[line++].trim().split(" ").map(Number);
            item.push(item1)
            value.push(value1)
        }
       console.log(knapsackdp(item, value, w, n));
    }
}

let dp = Array(15 + 1).fill(-1).map(x => Array(20 + 1).fill(-1))
function knapsackdp(item, value, w, n) {
    if (n == 0 || w == 0) {
        return 0
    }
    if (dp[n][w] != -1) {
        return dp[n][w]
    }
    if (item[n - 1] <= w) {
        return dp[n][w] = Math.max(value[n - 1] + knapsackdp(item, value, w - item[n - 1], n - 1), knapsackdp(item, value, w, n - 1))
    }
    else {
        return dp[n][w] = knapsackdp(item, value, w, n - 1)
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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