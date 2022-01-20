function runProgram(input) {
    input = input.trim().split("\n");
    let w = +input[0].trim();
    let len=+input[1].trim();
    let price = input[2].trim().split(" ").map(Number)
    let weight = input[3].trim().split(" ").map(Number)
    let ans = [];
    for (let i = 0; i < len; i++) {
        ans.push([weight[i], price[i], price[i] / weight[i]])
    }
    ans.sort((a, b) => b[2] - a[2])
    let res = 0
    for (let i = 0; i < len; i++) {
        if (ans[i][0] <= w) {
            res = res + ans[i][1];
            w = w - ans[i][0]
        } else {
            res = res + (ans[i][1] * w / ans[i][0])
            break
        }
    }
    console.log(Math.round(res));

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`50 
    3
    60 120 100
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