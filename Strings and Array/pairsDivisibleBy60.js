function runProgram(input) {
    var arr = input.split("\n");
    for (var k = 1; k < arr.length; k = k + 2) {
        var len = +arr[k].trim()
        var data = arr[k + 1].trim().split(" ").map(Number);
        let count = 0
        for (let i = 0; i < len - 1; i++) {
            for (let j = i + 1; j < len; j++) {
                if ((data[i] + data[j] )% 60 == 0) {
                    count++
                }

            }

        }
        console.log(count);


    }

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    3
    60 60 60
    5
    30 30 10 20 400`);
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