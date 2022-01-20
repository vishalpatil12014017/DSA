function runProgram(input) {
    var arr = input.split("\n");
    var [len, num] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    var count = 0;
    for (let i = 0; i < len; i++) {
        if (data[i] != 0 && data[i] >= data[num-1]) {
            count++
        }

    }
    console.log(count);
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`8 5
    10 9 8 7 7 7 5 5`);
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