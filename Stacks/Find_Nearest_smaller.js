function runProgram(input) {
    var arr = input.split("\n");
    var t = arr[0].trim()
    for (var k = 1; k < t * 2 + 1; k = k + 2) {
        var len = arr[k].trim();
        var data = arr[k + 1].trim().split(" ").map(Number);
        var ans2 = next_smaller(data, len);
        var ans1 = left_smaller(data, len);
        var res = []
        for (let i = 0; i < len; i++) {
            if (Math.abs(ans1[i][1] - i) < Math.abs(ans2[i][1] - i)) {
                res.push(ans1[i][0]);
            } else if (Math.abs(ans1[i][1] - i) > Math.abs(ans2[i][1] - i)) {
                res.push(ans2[i][0]);
            } else {
                if (ans1[i][0] === Infinity && ans2[i][0] === Infinity) {
                    res.push(-1);
                } else {
                    res.push(ans1[i][0]);
                }
            }
        }


        console.log(res.join(" "))
    }
}
function next_smaller(data, len) {
    var stack = [];
    var res = [];
    for (var i = data.length - 1; i >= 0; i--) {
        while (stack.length != 0 && stack[stack.length - 1][0] >= data[i]) {
            stack.pop();
        }
        if (stack.length == 0) {
            res.push([Infinity, Infinity]);
        } else {
            res.push(stack[stack.length - 1])
        }
        stack.push([data[i], i])
    }
    return res.reverse()
}
function left_smaller(data, len) {
    var stack = [];
    var res = [];
    for (let i = 0; i < data.length; i++) {
        while (stack.length != 0 && stack[stack.length - 1][0] >= data[i]) {
            stack.pop();
        }
        if (stack.length == 0) {
            res.push([Infinity, Infinity]);
        } else {
            res.push(stack[stack.length - 1])
        }
        stack.push([data[i], i])
    }
    return res
}
//27 11 4 1 4 24 1 -1 
if (process.env.USERNAME === "Vishal") {
    runProgram(`1
    8
    39 27 11 4 24 32 32 1`);
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