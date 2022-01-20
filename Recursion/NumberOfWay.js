function runProgram(input) {
    var data = +input.trim()
    let dp=Array(data+1).fill(-1)
    dp[0]=0;
    dp[1]=1
    console.log(Ways(data));
    function Ways(data) {
        if (dp[data]!=-1) return dp[data];
        return (dp[data]=Ways(data - 1) + Ways(data - 2) )
    }
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