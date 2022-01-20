function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let i = 1; i <= t; i++) {
        var [A, B] = arr[i].trim().split(" ").map(Number);
        if (A > B) {
            console.log("Not Possible");
        } else {
            while (A <= B) {
                if (B % A == 0) {
                    B = B / 2
                } else {
                    A = Number(A + "1")
                    console.log('A:', A)
                }
            }
            if (A==B) {
                console.log("Possible");
            }else{
                console.log("Not Possible");
            }
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`4
    6 242
    3 3
    6 3
    10 30`);
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