function runProgram(input) {
    input = input.trim().split("\n");
    var N = +input[0].trim();
    var arr = input[1].trim().split(" ").map(Number)
    var res = [];
    var sum = 0
    for (let i = 0; i < N; i++) {
        sum += arr[i]
        res.push(sum)
    }
    var index;
    var flag = false
    for (let i = 1; i < N; i++) {
        if (res[N - 1] - arr[i] == 2 * (res[i - 1])) {
            flag = true;
            index = i
        }
    }
    if (flag == true) {
        console.log(index + 1);
    } else {
        console.log(-1);
    }



}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    3 3 5 5 1`);
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
