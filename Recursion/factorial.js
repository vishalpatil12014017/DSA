function runProgram(input) {
    var value = Number(input)
    function factorial(n){
        if(n==0 ||n==1)return 1;
        return n*factorial(n-1);
    }
    console.log(factorial(value))

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`4`);
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