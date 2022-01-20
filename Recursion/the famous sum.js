function runProgram(input) {
    var [x, n] = input.trim().split(" ").map(Number);
    var res=famousSum(x.toString());
    let ans;
    res=(res*Number(n));
    ans=famousSum(res);
    console.log( ans)

    function famousSum(value) {
        value=""+value;
        if (value.length==1) return Number(value);
            var sum = 0;
            for (let i = 0; i < value.length; i++) {
                sum += (Number(value[i]));
            }
            return famousSum(sum)
    }  
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`148 3`);
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