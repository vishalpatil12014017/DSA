function runProgram(input) {
    var arr = input.split("\n");
    for (let i = 1; i <= arr[0]; i++) {
        var data = arr[i].trim().split(" ").sort((a, b) => {
            return a - b
        }).map(Number);
        if ( data[2] < (data[0] + data[1])) {
            console.log("Yes");
        } else {
            console.log("No");
        }

    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`4
    4 5 9
    7 1 8
    2 5 4
    2 2 2
    `);
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