function runProgram(input) {
    var arr = input.split("\n");
    var [len, num] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    var res = []
    for (let i = 0; i < data.length; i++) {
        var sum = 0
        for (let k = i; k < data.length; k++) {
            sum += data[k]
            if (sum == num) {
                res.push((k - i) + 1)
            }
        }
    }
    if (res.length == 0) {
        console.log(-1);
    } else {
        console.log(Math.min(...res));
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5 8
    2 -3 0 1 3`);
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