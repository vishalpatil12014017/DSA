function runProgram(input) {
    var arr = input.split("\n");
    var [len, k] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    var sum = 0
    for (let i = 0; i < k; i++) {
        sum+=data[i]
        
    }
    var max=sum;
    for (let i = k; i < len; i++) {
        sum+=data[i]-data[i-k];
        if (sum>max) {
            max=sum
        }
        
    }
    console.log(max);
    
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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