function runProgram(input) {
    var arr = input.split("\n");
    var t=+arr[0].trim()
    for (let k = 1; k < t+1; k++) {
        var [item,value]=arr[k].trim().split(" ").map(Number);
        console.log('item:', item)
        
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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