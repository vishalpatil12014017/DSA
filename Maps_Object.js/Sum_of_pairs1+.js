function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let k = 1; k < t * 2; k = k + 2) {
        var [len, num] = arr[k].trim().split(" ").map(Number);
        var data = arr[k + 1].trim().split(" ").sort((a, b) => {
            return a - b
        }).map(Number);
        var flag = false
        var low = 0;
        var high = len - 1;
        while (low < high) {
            if (data[low] + data[high] == num) {
                flag = true;
                break
            }
            else if (data[low] + data[high] > num) {
                high--
            } else {
                low++
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