function runProgram(input) {
    var arr = input.split("\n");
    var [len, num] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    var max = 0
    for (let i = 0; i < data.length; i++) {
        var subarr = []
        for (let j = i; j < data.length; j++) {
            subarr.push(data[j])
            // console.log(subarr);
            // [ 2 ]
            // [ 2, -2 ]
            // [ 2, -2, 0 ]
            // [ 2, -2, 0, 3 ]
            // [ 2, -2, 0, 3, 4 ]
            // [ -2 ]
            // [ -2, 0 ]
            // [ -2, 0, 3 ]
            // [ -2, 0, 3, 4 ]
            // [ 0 ]
            // [ 0, 3 ]
            // [ 0, 3, 4 ]
            // [ 3 ]
            // [ 3, 4 ]
            // [ 4 ]
            var sum = 0
            if (subarr.length == num) {
                for (let k = 0; k < num; k++) {
                    sum += subarr[k]
                }
                if (sum > max) {
                    max = sum
                }
            }
        }
    }
    console.log(max);
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5 3
    2 -2 0 3 4`);
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