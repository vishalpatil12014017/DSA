function runProgram(input) {
    var arr = input.trim().split("\n");
    var t = +arr[0].trim();
    for (let k = 1; k < t * 2; k = k + 2) {
        var [len, sum] = arr[k].trim().split(" ").map(Number);
        var data = arr[k + 1].trim().split(" ").map(Number)
        data.sort((a, b) => {
            return a - b
        })
        console.log(Check(data, len, sum));
    }
}
function Check(data, len, sum) {
    var start = 0;
    var end = len - 1;
    var flag = true
    while (start < end) {
        if (data[start] + data[end] == sum) {
            return 1
        } else if (data[start] + data[end] > sum) {
            end--
        } else {
            start++
        }
    }
    return -1
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    5 15
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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
