function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let k = 1; k < t + 1; k++) {
        var n = +arr[k].trim()
        let even = 0, odd = 0;

        for (let j = 1; j <= n; j++) {
            if ((n % j) == 0 && j % 2 == 0) {
                even++
            } else if (n % j == 0 && (j % 2) !== 0) {
                odd++
            }
        }
        if (even > odd) {
            console.log("Even Skewed")
        } else if (odd > even) {
            console.log("Odd Skewed")
        } else {
            console.log("Not Skewed")
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    4
    6
    11
    11
    12`);
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