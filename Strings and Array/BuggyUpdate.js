
function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim();
    for (let p = 1; p < t * 2; p = p + 2) {
        var data = arr[p].trim().split(".").map(Number)
       
        var data1 = arr[p + 1].trim().split(".").map(Number)
       
        var flag = false
        for (let i = 0; i < data.length; i++) {
            if (data1[i]==data[i]) {
                continue;  
            }else if(data1[i]>data[i]) {
                flag=true;
                break
            }else{
                break
            }
        }
        if (flag == false) {
            console.log("False");
        } else {
            console.log("True");
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    2.0.1
    1.9.8
    12.0.1
    12.10.0
    1.1.10
    1.1.12`);
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