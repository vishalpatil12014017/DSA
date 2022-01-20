function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim();
    var data = arr[1].trim().split(" ")
    var q = +arr[2].trim();
    let ans = [];
    for (let i = 0; i < len; i++) {
        if (data[i][0] == "a" || data[i][0] == "e" || data[i][0] == "i" || data[i][0] == "o" || data[i][0] == "u" && data[i][data[i].length - 1] == "a" || data[i][data[i].length - 1] == "e" || data[i][data[i].length - 1] == "i" || data[i][data[i].length - 1] == "o" || data[i][data[i].length - 1] == "u") {
            ans.push(1)
        } else {
            ans.push(0)
        }
        console.log(data[i][data[i].length-1]);
    }
    for (let p = 3; p < q + 3; p++) {
        var [start, end] = arr[p].trim().split(" ").map(Number);
        let count = 0
        for (let i = start - 1; i < end; i++) {
            if (ans[i] == 1) {
                count++
            }

        }
        console.log(count);

    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    aba suna ouh tes obc
    5
    1 5
    2 4
    1 3
    3 5
    5 5`);
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