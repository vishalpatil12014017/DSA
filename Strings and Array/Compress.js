function runProgram(input) {
    var arr = input.split("\n");
    var str = arr[0].trim().split("")
    var res="";
    var count=1
    for (let i = 0; i < str.length; i++) {
       if (str[i]==str[i+1]) {
           count++
       }else{
           res+=str[i]+count;
           count=1
       }
    }
   
    console.log(res);
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`aaabbbbcca`);
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