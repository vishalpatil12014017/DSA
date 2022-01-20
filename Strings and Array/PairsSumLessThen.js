function runProgram(input) {
    var arr = input.trim().split("\n");
    var t = +arr[0].trim();
    for (let k = 1; k < t * 3; k = k + 3) {
        var len = +arr[k].trim();
        var data = arr[k + 1].trim().split(" ").map(Number);
        var sum = +arr[k + 2].trim();
        let max = 0
        for (let i = 0; i < len - 1; i++) {
            for (let j = i + 1; j < len; j++) {
                if ((data[i] + data[j]) < sum ) {
                   if (max<data[i] + data[j]) {
                    max=data[i] + data[j] 
                   }
                }

            }

        }
        console.log(max == 0 ? -1 : max);
    }
}

if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    6
    1 7 6 4 8 4
    7
    1
    2
    3
    6
    5 3 8 2 1 9
    5`);
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
