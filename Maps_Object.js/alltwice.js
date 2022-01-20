function runProgram(input) {
    var arr = input.split("\n");
    for (var k = 1; k < arr.length; k = k + 2) {
        var len = +arr[k].trim()
        var data = arr[k+1].trim().split(" ").sort((a,b)=>{
            return a-b
        }).map(Number);
        for (let i = 0; i < len; i=i+2) {
            if (data[i]!=data[i+1]) {
                console.log(data[i]);
                break
            }
            
        }
    }

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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