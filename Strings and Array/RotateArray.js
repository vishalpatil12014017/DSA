function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (var k = 1; k < t * 2 + 1; k = k + 2) {
        var [len, num] = arr[k].trim().split(" ").map(Number);
        var data = arr[k + 1].trim().split(" ").map(Number);
        if (len == num) {
            console.log(data.join(" "));
        } else {
            num = num % len;
            let res = []
            for (let i = len-num; i < len; i++) {
                res.push(data[i])
            }
            for (let j = 0; j < len - num; j++) {  
                res.push(data[j])
            }
            console.log(res.join(" "));
        }

    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    2 1
    1 2
    2 2
    1 2
    3 1
    1 2 3`);
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