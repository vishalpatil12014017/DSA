function runProgram(input) {
    var arr = input.split("\n");
    var len= +arr[0].trim()
    var position = arr[1].trim().split(" ").sort((a,b)=>{
        return a-b
    }).map(Number);
    var room = arr[2].trim().split(" ").sort((a,b)=>{
        return a-b
    }).map(Number);
    var max=0
    for (let i = 0; i < len; i++) {
        var ans=Math.abs(position[i]-room[i])
        var res=Math.max(ans,max)
        max=res
            
    }
    console.log(res);
  
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    4 -4 3
    4 -4 0`);
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