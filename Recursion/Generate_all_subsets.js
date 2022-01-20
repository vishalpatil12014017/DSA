function runProgram(input) {
    var arr = input.split("\n");
    var len = Number(arr[0].trim())
    var data = []
    for (let i = 1; i <= len; i++) {
        data.push(i)
    }
    function Subset(data, len, sets, index) {
        if (sets.length == 0) {
            console.log(" ");
        } if (sets.length > 0) {
            console.log(sets.join(" "));
        }
        if (index == len) {
            return
        }
        for (let i = index; i < len; i++) {
            sets.push(data[i])
            Subset(data, len, sets, i + 1)
            sets.pop()
        }
    }
    let sets = [];
    Subset(data, len, sets, 0)

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3`);
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