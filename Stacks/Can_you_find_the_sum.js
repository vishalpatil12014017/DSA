function runProgram(input) {
    input = input.trim().split("\n");
    let data = input[1].trim().split(" ").map(Number);
    var ans1=Next_greater(data);
    var ans2=Left_Greater(data);
    var ans=""
    for (let i = 0; i < ans1.length; i++) {
       ans+=ans1[i]+ans2[i]+" "
        
    }  
    console.log(ans);
}
function Next_greater(data) {
    var stack = [];
    var res = [];
    for (var i = data.length - 1; i >= 0; i--) {
        while (stack.length != 0 && stack[stack.length - 1][0] <= data[i]) {
            stack.pop();
        }
        if (stack.length == 0) {
            res.push(-1);
        } else {
            res.push(stack[stack.length - 1][1])
        }
        stack.push([data[i],i+1])
    }
    return res.reverse()
}

function Left_Greater(data) {
    var stack = [];
    var res = [];
    for (let i = 0; i < data.length; i++) {
        while (stack.length != 0 && stack[stack.length - 1][0] <= data[i]) {
            stack.pop();
        }
        if (stack.length == 0) {
            res.push(-1);
        } else {
            res.push(stack[stack.length - 1][1])
        }
        stack.push([data[i],i+1])
    }
    return res
}

if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    5 4 1 3 2`);
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