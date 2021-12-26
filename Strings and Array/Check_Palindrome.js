function runProgram(input) {
    var arr = input.split("\n");
    var N=+arr[0].trim()
    var str = arr[1].trim().split("")
    var flag=true
    for (let i = 0; i < Math.floor(N/2); i++) {
        if (str[i]!=str[N-1-i]) {
            flag=false
        }   
    }
    if (flag==true) {
        console.log("Yes");
    }else{
        console.log("No");
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    abpba`);
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