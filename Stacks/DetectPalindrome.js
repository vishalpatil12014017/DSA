
function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim();
    for (let k = 1; k < t * 2; k = k + 2) {
        var len = +arr[k].trim()
        var data = arr[k + 1].trim()
        var obj = {}
        for (let i = 0; i < len; i++) {
            if (obj[data[i]] != undefined) {
                obj[data[i]] += 1
            } else {
                obj[data[i]] = 1
            }

        }
        
        var skip = 0
        for (key in obj) {
           
            if (obj[key] % 2 != 0) {
                skip++
            }

        }
        if (skip > 1) {
            console.log("Not Possible!");
        } else {
            console.log("Possible!");
        }

    }



}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    6
    aabbcc
    5
    aabcd`);
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