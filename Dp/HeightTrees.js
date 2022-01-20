function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim()
    var data = arr[1].trim().split(" ").map(Number);
    var dp = [];
    for (let i = 0; i <= len; i++) {
        dp[i] = 1
    }
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (data[i] > data[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    // console.log(ans);
    console.log(Math.max(...dp));
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`10
    10 22 9 33 21 50 41 60 80 60`);
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