function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let k = 1; k < t * 2; k = k + 2) {
        var len = +arr[k].trim()
        var data = arr[k + 1].trim().split(" ").map(Number);
        var count = 0;
        var count1 = 0;
        var count2 = 0
        for (var i = 0; i < data.length; i++) {
            if (data[i] == 0) {
                count++
            }
            if (data[i] == 1) {
                count1++
            }
        }
        var ans = '';
        for (let i = 0; i < len; i++) {
            if (i < count) {
                ans += 0 + " "
            }
            else if (i < count1 + count) {
                ans += 1 + " "
            } else {
                ans += 2 + " "
            }
        }
        console.log(ans);
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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