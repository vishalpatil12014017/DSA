function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim()
    var que = []
    for (var k = 1; k <= len; k++) {
        var [letter, num] = arr[k].trim().split(" ")
        if (letter == "E") {
            que.push(num)
            console.log(que.length);
        } else {
          
            if (que.length == 0) {
                console.log(-1,0);
            } else {
                console.log( que.shift(),que.length);
            }
        }

    }
}

if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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