function runProgram(input) {
    var arr = input.split("\n");
    var [len, num] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    var max = 0
    for (var i = 0; i <= data.length - num; i++) {
        var flag = false
        for (var j = i; j < i + num; j++) {
            if (data[j] < 0) {
                console.log(data[j]);
                flag = true
                break
            }
        }
        if (flag == false) {
            console.log(0);
        }
    }

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5 3
    2 -2 -1 3 2 1`);
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