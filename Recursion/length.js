function runProgram(input) {
    var value =input
    function findLength(n){
        if(n=="")return 0;
        return findLength(n.substring(1))+1;
        // return findLength(n.slice(1))+1;
        // return findLength(n.substr(1))+1;
    }
    console.log(findLength(value))

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`masaischool`);
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