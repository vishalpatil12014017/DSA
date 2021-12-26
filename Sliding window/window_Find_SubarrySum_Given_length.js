function runProgram(input) {
    var arr = input.split("\n");
    var [len, num] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    var max;
    var sum = 0
    for (let i = 0; i < num; i++) {
        sum += data[i]
    }
    max = 0
    for (let i = num; i < data.length; i++) {
        sum += data[i] - data[i - num]
        if (sum > max) {
            max = sum
        }
    }
    console.log(max);
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5 3
    2 0 2 0 -5 4 2`);
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