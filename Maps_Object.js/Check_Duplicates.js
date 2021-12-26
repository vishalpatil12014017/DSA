function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let k = 1; k < t * 2; k = k + 2) {
        var len = +arr[k].trim()
        var data = arr[k + 1].trim().split(" ").map(Number);
        var obj = {};
        for (var i = 0; i < data.length; i++) {
            if (obj[data[i]] != undefined) {
                obj[data[i]] += 1
            } else {
                obj[data[i]] = 1;
            }
        }
        var flag = false
        for (key in obj) {
            if (obj[key] >= 2) {
                flag = true
            }
        }
        if (flag == true) {
            console.log("YES");
        } else {
            console.log("NO")
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    1
    1
    2
    1 1
    3
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