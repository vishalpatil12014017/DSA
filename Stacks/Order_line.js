function runProgram(input) {
    var arr = input.split("\n");
    for (let k = 0; k < arr.length - 1; k = k + 2) {
        var len = +arr[k].trim()
        var data = arr[k + 1].trim().split(" ").map(Number);
        var stack = [];
        var flag = true
        var res=[]
        for (let i = 1; i < len; i++) {
           
            if (data[i - 1] > data[i]) {
                stack.push(data[i - 1])
               
            }
            else{
                res.push(data[i-1])
            }
            
            
        }
        console.log(...res,...stack);
        // console.log(stack);
        // if (stack.length>1) {
        //     console.log("no");
        // }else{
        //     console.log("yes");
        // }

    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5 
    4 1 5 3 2 
    5 
    3 1 2 5 4 
    5 
    5 3 2 1 4 
    10 
    1 2 10 5 4 3 7 6 8 9 
    10 
    1 2 10 5 4 3 9 8 7 6 
    5 
    3 5 2 4 1 
    5 
    1 2 4 3 5 
    4 
    4 2 3 1 
    0`);
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