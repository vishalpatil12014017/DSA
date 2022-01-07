
function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim();
    for (let p = 1; p < t * 2; p = p + 2) {
        var [len, k] = arr[p].trim().split(" ").map(Number)
        var data = arr[p + 1].trim().split(" ").map(Number)
        var flag = false
        var sum = data[0];
        var start = 0
        for (let i = 1; i <= len; i++) {
            while (sum > k) {
                sum = sum - data[start];
                start++
            }
            if (sum == k) {
                flag = true
            }
            sum = sum + data[i]
        }
        
        if (flag == true) {
            console.log("Yes");
        } else {
            console.log("No");
        }

    }



}
if (process.env.USERNAME === "Vishal") {
    runProgram(`10
    7 14
    3 5 4 2 2 1 1
    8 14
    1 7 4 3 2 1 5 6
    2 1
    3 1
    7 1
    1 1 1 1 1 1 1
    2 1
    1 1
    10 2
    2 6 3 3 4 1 1 5 2 4
    3 6
    9 6 4
    7 6
    3 9 6 1 7 8 10
    1 6
    3
    1 1
    3`);
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