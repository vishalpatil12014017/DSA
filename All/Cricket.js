function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let k = 1; k < t * 2; k = k + 2) {
        var len = +arr[k].trim()
        var data = arr[k + 1].trim().split(" ").map(Number);
        var ab = 0;
        var virat = 0;
        var flag = true;
        for (let i = 0; i < data.length; i++) {
            if (flag == true) {
                ab += data[i]
            } else {
                virat += data[i]
            }

            if (data[i] == 1 || data[i] == 3) {
                flag = !flag
            }
            if ((i + 1) % 6 == 0) {
                flag = !flag
            }
        }
        if (ab == virat) {
            console.log("Tie");
        } else if (ab > virat) {
            console.log("AB de Villiers");
        } else {
            console.log("Virat Kohli");
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0`);
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