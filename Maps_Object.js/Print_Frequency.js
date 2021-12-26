function runProgram(input) {
    var arr = input.split("\n");
    var len=+arr[0].trim()
    var data = arr[1].trim().split("").sort()
    var obj={};
    for (let i = 0; i < len; i++) {
       if(obj[data[i]]!=undefined){
        obj[data[i]]+=1
       }else{
        obj[data[i]]=1
       }  
    }
    for(key in obj){
        console.log(key+"-"+obj[key]);
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`4
    paman`);
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