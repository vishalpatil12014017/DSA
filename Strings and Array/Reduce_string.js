function runProgram(input) {
    var str = input
    var res = "";
    var count = 1
    for (let i = 1; i <= str.length; i++) {
        if (str[i - 1] == str[i]) {
            count++
        } else {
            if (count % 2 != 0) {
                res += str[i-1]
            }
            count = 1
        }
    }
    if (res.length==0) {
        console.log("Empty String");
    }else{
        console.log(res);
    }
   
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`aaabccdddeeeaaa`);
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