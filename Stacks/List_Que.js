function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim()
    var que = []
    for (var k = 1; k <= len; k++) {
        var [letter, num] = arr[k].trim().split(" ")
        if (letter == "Push") {
            que.push(num)
        } else {
            if (que.length == 0) {
                console.log("Empty");
            } else {
                console.log(que.pop());
            }
        }

    }
}

if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    Push 4
    Push 5
    Pop`);
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