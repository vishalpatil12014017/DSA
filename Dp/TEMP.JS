function runProgram(input) {
    var arr = input.split("\n");
    var [len,num]=arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5 0
    2 -2 0 3 4`);
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