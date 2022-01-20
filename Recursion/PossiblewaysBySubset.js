function runProgram(input) {
    var arr = input.split("\n");
    var [len, sum] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    let ans = []
    let obj = {}
    function Subset(data, len, sets, index) {
        if (sets.length > 0) {
            if (sets.reduce((a, c) => a += c) == sum) {
                if (obj[[...sets]] != undefined) {
                    obj[[...sets]]++
                } else {
                    console.log([...sets].join(" "));
                    obj[[...sets]] = 1
                }
            }
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
    if (Object.entries(obj).length == 0) {
        console.log(-1);
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5 10
    2 4 4 6 8`);
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