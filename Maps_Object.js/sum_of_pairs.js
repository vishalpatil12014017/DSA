function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let k = 1; k < t * 2; k = k + 2) {
        var [len, num] = arr[k].trim().split(" ").map(Number);
        var data = arr[k + 1].trim().split(" ").map(Number);
        var flag = false
        for (let i = 0; i < len- 1; i++) {
            for (let j =  i + 1;j < len ; j++) {
                if (data[i] + data[j] == num) {
                    flag = true
                    break
                }

            }

        }
        if (flag == true) {
            console.log(1);
        } else {
            console.log(-1)
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    5 2
    3 4 0 2 7
    5 2
    3 4 1 2 7`);
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