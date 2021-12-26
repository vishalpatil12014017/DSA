function runProgram(input) {
    var arr = input.split("\n");
    var obj = {}
    for (let i = 1; i < arr.length; i++) {
        if (obj[arr[i].trim().split("").sort().join("")] == undefined) {
            obj[arr[i].trim().split("").sort().join("")] = i
        }

    }
    let res = [];
    for (key in obj) {
        res.push(arr[obj[key]].trim())
    }
    res.sort()
    console.log(Object.keys(obj).length);
    for (let i = 0; i < res.length; i++) {
        console.log(res[i].trim());

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