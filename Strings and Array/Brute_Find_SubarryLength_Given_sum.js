function runProgram(input) {
    var arr = input.split("\n");
    var [len, num] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    var min = 0;
    var len = 0;
    var res = []
    for (let i = 0; i < data.length; i++) {
        var subarr = ""
        for (let j = i; j < data.length; j++) {
            subarr+=" "+data[j]
            console.log(subarr);
        }
        // var sum = 0
        // for (let k = 0; k < subarr.length; k++) {
        //     sum += subarr[k]
           
        // }

        // if (sum == num) {
        //     res.push(subarr.length)
        // }


    }
    res.sort()
    console.log(res[0]);
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5 0
    2 -2 0 1 3`);
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