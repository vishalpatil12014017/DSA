function runProgram(input) {
    var arr = input.split("\n");
    var len=+arr[0].trim();
    var data = arr[1].trim().split(" ").map(Number);
    var odd=0;
    var even=0
    for (let i = 0; i < len; i++) {
       if(data[i]%2==0){
           even+=data[i]
       }else{
        odd+=data[i]
       }
        
    }
    if (odd>even) {
        console.log("Odd");
    }else{
        console.log("Even");
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`4
    1 2 3 4`);
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