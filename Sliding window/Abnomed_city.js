
function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim();
    for (let p = 1; p < t * 2; p = p + 2) {
        var [len, k] = arr[p].trim().split(" ").map(Number)
        var data = arr[p + 1].trim().split(" ").map(Number)
        var flag = false
        var sum = data[0];
        var start = 0
        var length = len
        for (let i = 1; i <= len; i++) {
            while (sum >= k) {
                flag = true
                length = Math.min(length, i - start)
                sum = sum - data[start];
                start++
            }
            sum = sum + data[i]
        }
        if (flag == true) {
            console.log(length);
        } else {
            console.log(-1);
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`7
    9 653
    74 11 65 47 64 14 27 95 65
    16 26
    63 94 72 40 5 89 5 57 20 21 2 41 62 91 19 2
    7 198
    11 97 13 53 40 12 83
    19 588
    6 55 21 13 93 35 58 6 30 3 86 76 39 74 59 58 55 86 52
    6 161
    90 60 55 41 68 25
    16 730
    24 57 28 74 32 97 16 44 59 68 37 59 20 27 20 27
    11 184
    94 23 42 65 45 83 77 100 31 86 77`);
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