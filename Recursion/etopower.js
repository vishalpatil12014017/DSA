function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[0].split(" ").map(Number);
    let x = data[0];
    let n = data[1];
    function fun2(n) {
        if (n == 1) {
            return 1;
        } else {
            return n * fun2(n - 1);
        }
    }
    let fun = (x, n) => {
        if (n == 0) {
            return 1;
        } else {
            return fun(x, n - 1) + (1 / fun2(n))*(x ** n);
        }
    }
    console.log(fun(x, n).toFixed(4));
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`4 2`);
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