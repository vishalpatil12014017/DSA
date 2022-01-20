function runProgram(input) {
    var arr = input.split("\n");
    var t = Number(arr[0].trim());
  
    for (let i = 1; i < t+1; i++) {
        var data = Number(arr[i].trim());
        function total(n) {
            if(n==0)return 1;
            if(n<0)return 0;
            return (total(n-1)+total(n-2)+total(n-5))
        } 
        console.log(total(data))
    }
  
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    4
    5`);
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