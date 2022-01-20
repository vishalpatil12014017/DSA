function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (var k = 1; k < t * 2 + 1; k = k + 2) {
        var len = +arr[k].trim()
        var data = arr[k + 1].trim().split(" ").map(Number);
        var count = 0;
        let curr_sum =(data[0] == 0) ? -1 : 1;
        var start = 0;
        for (let i = 1; i <= len; i++) {
            while (curr_sum ==1 && start < i - 1) {
                curr_sum += (data[start] == 0) ? -1 : 1;
                console.log(curr_sum);
                start++;
            }
           
            if (curr_sum == 0) {
                let p = i - 1;
                console.log(
                    "Sum found between indexes " + start
                    + " and " + p + "<br>");
            }
            if (i < len) {
                curr_sum = curr_sum + (data[start] == 0) ? -1 : 1;
            }
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`1
    6
    1 0 0 1 0 1`);
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