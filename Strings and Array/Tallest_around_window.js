function runProgram(input) {
    var arr = input.split("\n");
    var t = arr[0].trim()
    for (var k = 1; k < t * 2 + 1; k = k + 2) {
        var [len, num] = arr[k].trim().split(" ").map(Number);
        var data = arr[k + 1].trim().split(" ").map(Number);
        var stack = [];
        var max = 0;
        var sum = 0
        for (let i = 0; i <= len - num; i++) {
            max = data[i]
            for (let j = i+1; j < i+num; j++) {
                if (max < data[j]) {
                    max = data[j]
                }
            }
            stack.push(max)
        }
        console.log(stack.join(" "));
    }
}
//  3 3 4 5 5 5 6
if (process.env.USERNAME === "Vishal") {
    runProgram(`1
    9 3
    1 2 3 1 4 5 2 3 6`);
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