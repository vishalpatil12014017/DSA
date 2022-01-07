function runProgram(input) {
    var arr = input.split("\n");
    var t = arr[0].trim()
    for (var k = 1; k < t * 2 + 1; k = k + 2) {
        var len = arr[k].trim();
        var data = arr[k + 1].trim().split(" ").map(Number);
        var stack = [];
        var res = [];
        for (var i = len - 1; i >= 0; i--) {
            while (stack.length != 0 && stack[stack.length - 1] >= data[i]) {
                stack.pop();
            }
            if (stack.length == 0) {
                res.push(-1);
            } else {
                res.push(stack[stack.length - 1])
            }
            stack.push(data[i])
        }
        console.log(res.reverse().join(" "))
    }
}
//  27 11 4 1 1 1 1 -1
if (process.env.USERNAME === "Vishal") {
    runProgram(`1
    8
    39 27 11 4 24 32 32 1`);
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