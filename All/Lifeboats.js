function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let k = 1; k < t * 2; k = k + 2) {
        var [len, num] = arr[k].trim().split(" ").map(Number);
        var data = arr[k + 1].trim().split(" ").sort((a, b) => {
            return a - b
        }).map(Number);
        var count = 0;
        let start = 0;
        let end = data.length - 1;
        while (start < end) {
            if ((data[start] + data[end]) <= num) {
                count++
                start++;
                end--;
            } else if ((data[start] + data[end]) > num) {
                end--
                
            } else {
                
                start++
            }
        }
        console.log(len - count);
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 2 2 3`);
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