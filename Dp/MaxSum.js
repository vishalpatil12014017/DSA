//we can take multiple occurance
function runProgram(input) {
    input = input.trim().split("\n");
    var t = +input[0].trim();
    for (let k = 1; k < t * 2; k = k + 2) {
        var len = +input[k].trim();
        var data = input[k + 1].trim().split(" ").map(Number)
        var privious = data[0];
        var next = 0;
        var sum = 0;
        for (let i = 1; i < len; i++) {
            if (privious > next) {
                sum = privious
            } else {
                sum = next
            }
            privious = next + data[i];
            next = sum

        }
        console.log(Math.max(privious, next));

    }

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    2
    1 100
    3
    2 100 99
    4
    100 1 1 100`);
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
