function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    var data = arr[1].trim().split(" ").map(Number);
    var sum1 = 0;
    var sum2 = 0;
    var sum=0
    for (let i = 0; i <t; i++) {
        sum+=data[i]
        
    }
    for (let i = 0; i < Math.floor(t/2); i++) {
        sum1+=data[i]
        
    }
    console.log(sum,sum1);

}

if (process.env.USERNAME === "Vishal") {
    runProgram(`7
        8 8 9 7 7 9 7`);
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