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
        knapsackdp(item, value, w, n)
    }
}
function knapsackdp(item, value, w, n) {
    let dp = [];
    for(let i = 0 ; i< n+1; i++){
        dp[i] = []
        for(let j = 0 ; j < w+1 ; j++){
            if(i == 0 || j == 0){
                dp[i][j] = 0
            }
        }
    }
    for(let i = 1 ; i< n+1; i++){
        for(let j = 1 ; j < w+1 ; j++){
            if (item[i - 1] <= j) {
                dp[i][j] = Math.max((value[i - 1] + dp[i-1][j-item[i-1]]) ,  (dp[i-1][j]) )
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    console.log(dp[n][w]);
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