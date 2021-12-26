function runProgram(input) {
    var arr = input.split("\n");
    var [len, num] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    let index = 0;
    for (let i = num - 1; i < data.length; i++) {
        while ((index < i) && (index <= i - num || data[index] > 0)) {
            index++;
        }
        if (data[index] < 0) {
            console.log(data[index])
        }
        else {
            console.log(0)
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`8 3
    2 -5 -1 3 -2 1 8 8`);
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