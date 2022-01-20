function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let i = 1; i <= t; i++) {
        var [first, second] = arr[i].trim().split(" ").map(Number);
        console.log(GCD(first, second));
    }
}
function GCD(first, second) {
    if (second == 0) {
        return first
    }
    return GCD(second, first % second)
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    6 9
    2 25`);
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