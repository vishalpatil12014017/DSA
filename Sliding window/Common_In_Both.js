function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim();
    for (let p = 1; p < t * 3; p = p + 3) {
        var len = +arr[p].trim()
        var data = arr[p + 1].trim().split(" ").map(Number)
        var data1 = arr[p + 2].trim().split(" ").sort((a, b) => {
            return a - b
        }).map(Number)
        var count = 0
        var i = 0;
        var j = 0;
        while (i < len && j < len) {
            if (data[i] == data1[j]) {
                count++
                i++
                j++
            } else if (data[i] < data1[j]) {
                i++
            } else {
                j++
            }
        }
        console.log(count);

    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    6
    1 2 2 3 4 5
    4 4 3 2 1 1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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