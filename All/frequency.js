function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let k = 1; k < t * 2; k = k + 2) {
        var len = +arr[k].trim()
        var data = arr[k + 1].trim().split(" ").map(Number);
        var count = 1;
        var max = 1;
        let ele=data[0]
        for (let i = 0; i < len; i++) {
            if (data[i] == data[i + 1]) {
                count++
            }
            else {
                if (count > max) {
                    max = count
                    ele=data[i]
                }
                count = 1
            }
            // if (count > max) {
            //     max = count
            //     ele=data[i]
            // }

        }
        console.log(ele,max);
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    2
    1 1
    13
    1 2 2 2 4 4 4 4 4 5 5 5 5 
    `);
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