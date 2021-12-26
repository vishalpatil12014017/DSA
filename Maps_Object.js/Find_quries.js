function runProgram(input) {
    var arr = input.split("\n");
    var len=+arr[0].trim()
    var data = arr[1].trim().split(" ").map(Number);
    var len1=+arr[2].trim()
    var queries = arr[3].trim().split(" ").map(Number);
    for (let i = 0; i < len1; i++) {
        var flag=false
        for (let j = 0; j < len; j++) {
            if(data[j]===queries[i]){
                flag=true
                break;
            }
            
        }
        if (flag==true) {
           console.log("YES"); 
        }
        else{
            console.log("NO");
        }
        
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    1 2 3 4 5
    3
    3 5 7`);
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