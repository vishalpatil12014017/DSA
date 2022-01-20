function runProgram(input) {
    var arr = input.split("\n");
    var t=Number(arr[0].trim())
    for(var k=1;k<t*2;k=k+2){
        var len = Number(arr[k].trim());
        var data=arr[k+1].trim().split(" ").map(Number);
        function Sum(data,n){
            if(n<=0)return 0;
            return Sum(data,n-1)+data[n-1];
        }
        console.log(Sum(data,len))
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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