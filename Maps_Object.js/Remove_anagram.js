function runProgram(input) {
    var arr = input.split("\n");
    let obj={}
    let len=+arr[0].trim()
    for (let i = 1; i <= len; i++) {
        let data=arr[i].trim().split("").sort()
        if (obj[data]==undefined) {
            obj[data]=arr[i].trim()
        }   
    }
    let newdata=Object.values(obj).sort()
    console.log(newdata.length);
    for (let i = 0; i < newdata.length; i++) {
        console.log(newdata[i]);     
    }
    
    
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`6
    eodc
    odec
    code
    baca
    aabc
    odec`);
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