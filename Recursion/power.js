function runProgram(input) {
    var [x,y] = input.trim().split(" ").map(Number);
    function findpower(x,y) {
        if(y==0)return 1;
         //if(x==0)return 0;
       
        return x*findpower(x,y-1)
    }
   
    console.log(findpower(x,y))
 
   
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2 1`);
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