
function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim();
    for (let k = 1; k < t + 1; k++) {
        var data = arr[k].trim().split("")
        var stack = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i] == "(" || data[i] == "[" || data[i] == "{") {
                stack.push(data[i])
            } else if (data[i] == ")" && stack[stack.length - 1] == "(" || data[i] == "]" && stack[stack.length - 1] == "[" || data[i] == "}" && stack[stack.length - 1] == "{") {
                stack.pop()
            }
            else{
                stack.push(-1);
                break
            }
        }
        if (stack.length > 0) {
            console.log("not balanced");
        } else {
            console.log("balanced");
        }


    }



}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    {([])}
    ()
    ([]
    `);
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