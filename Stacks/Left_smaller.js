function runProgram(input) {
    var arr = input.split("\n");
    var t = arr[0].trim()
    for (var k = 1; k < t * 2 + 1; k = k + 2) {
        var len = arr[k].trim();
        var data = arr[k + 1].trim().split(" ").map(Number);
        var stack = [];
        var res = [];
        for (let i = 0; i < len; i++) {
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
        console.log(res.join(" "))
    }
}
//  -1 -1 -1 -1 4 24 24 -1
if (process.env.USERNAME === "Vishal") {
    runProgram(`1
    5
    4 3 6 7 8`);
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