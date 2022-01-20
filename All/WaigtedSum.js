function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let k = 1; k < t * 2; k = k + 2) {
        var len = +arr[k].trim()
        var data = arr[k + 1].trim().split(" ").map(Number);
        var sum=0;
        for (let i = 0; i < len; i++) {
            sum+=data[i]*(i+1)
            
        }
       console.log(sum);
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    5
    1 2 3 4 5
    2
    100 1`);
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