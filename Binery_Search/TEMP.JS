function runProgram(input) {
    var arr = input.split("\n");
    var num = arr[1];
    var n = num.trim().split(" ").map(Number);

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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