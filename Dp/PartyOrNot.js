
function runProgram(input) {
    var arr = input.split("\n");
    var [len, sum] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    var dp = [];
    for (let i = 0; i <= data.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= sum; j++) {
            if (i == 0) {
                dp[i][j] = false
            }
            if (j == 0) {
                dp[i][j] = true
            }

        }
    }
    for (var i = 1; i <= data.length; i++) {
        for (var j = 1; j <= sum; j++) {
            if (data[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j - data[i - 1]] || dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    if (dp[data.length][sum]) {
      console.log("Party");  
    }else{
        console.log("No Party");
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`6 9
    3 34 11 12 5 2`);
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