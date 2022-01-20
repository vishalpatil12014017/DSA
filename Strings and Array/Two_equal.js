function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let k = 1; k < t * 3; k = k + 3) {
        var len = +arr[k].trim()
        var data = arr[k + 1].trim().split("").sort().join('')
        var data1 = arr[k + 2].trim().split("").sort().join('')
        if (data == data1) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    2
    ab
    ac
    3
    aba
    aab`);
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