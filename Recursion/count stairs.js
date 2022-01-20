function runProgram(input) {
    var value = Number(input)
    function countStairs(n){
        if(n==0 ||n==1)return 1;
        else if(n==2)return 2;
        return countStairs(n-1)+countStairs(n-2)+countStairs(n-3);
    }
    console.log(countStairs(value))

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