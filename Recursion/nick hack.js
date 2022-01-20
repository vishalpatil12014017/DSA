function runProgram(input) {
    var arr = input.split("\n");
    var len = Number(arr[0].trim())
    var balance = 1;
    for (var k = 1; k <= len; k++) {
        var data = Number(arr[k].trim());

        function NickHack(data, balance) {
            if (balance > data) {
                return false;
            } if (balance == data) {
                return true;
            } else {
                return NickHack(data, balance * 10) || NickHack(data, balance * 20)
            }
        }
        if (NickHack(data, balance) == false) {
            console.log("No");
        } else {
            console.log("Yes")
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    1
    2
    10
    25
    200`);
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