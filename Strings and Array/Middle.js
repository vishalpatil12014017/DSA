function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    var data = arr[1].trim().split(" ").map(Number);
    var index=-1
    for (let i = 1; i < t-1; i++) {
       if (Math.max(...data.slice(0,i))<data[i]&&(Math.max(...data.slice(i,t))>=data[i])) {
          index=i
       }
    }
   console.log(data[index-1]);
}

if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    4 3 6 7 8`);
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