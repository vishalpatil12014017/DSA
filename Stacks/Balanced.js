function check(data) {
    var stack = []
    for (var i = 0; i < data.length; i++) {
        if (data[i] == "(" || data[i] == "[" || data[i] == "{") {
            stack.push(data[i])
        }
        else if (stack.length != 0 && (data[i] == ")" && stack[stack.length - 1] == "(" ||
            data[i] == "]" && stack[stack.length - 1] == "[" ||
            data[i] == "}" && stack[stack.length - 1] == "{")) {
            stack.pop()
        } else if (data[i] == ")" ||
            data[i] == "]" ||
            data[i] == "}") {
            return "unbalanced";
        }
    }
    if (stack.length == 0) {
        return "balanced"
    } else {
        return "unbalanced";
    }
}
function runProgram(input) {
    var arr = input.split("\n");
    var data = arr[0].trim();

    console.log(check(data))

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`{(([])[])[]]}`);
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