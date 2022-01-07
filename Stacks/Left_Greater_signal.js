function runProgram(input) {
    var arr = input.split("\n");
    var t = arr[0].trim()
    for (var k = 1; k < t * 2 + 1; k = k + 2) {
        var len = arr[k].trim();
        var data = arr[k + 1].trim().split(" ").map(Number);
        var stack = [];
        var res = "1 ";
        stack.push(0);
        for (var i = 1; i < len; i++) {
            while (data[i] >= data[stack[stack.length - 1]] && stack.length != 0) {
                stack.pop()
            }
            if (stack.length == 0) {
                res += i + 1 + " "
            }
            else {
                res += (i - stack[stack.length - 1]) + " "
            }
            stack.push(i)
        }
        console.log(res.trim())
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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