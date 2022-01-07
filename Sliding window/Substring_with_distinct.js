function runProgram(input) {
    var arr = input.split("\n");
    var [len, num] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split("")
    var i = 0;
    var j = 0;
    var obj = {};
    var count = 0;
    while (i < len) {
        if (obj[data[i]] != undefined) {
            obj[data[i]] += 1
        } else {
            obj[data[i]] = 1
        }
        if (i - j + 1 < num) {
            i++
        } else if (i - j + 1 == num) {
            if (Object.keys(obj).length === num) {
                count++
            }
            if (obj[data[j]] == 1) {
                delete (obj[data[j]])
            }
            else {
                obj[data[j]]--
            }
            j++;
            i++
        }
    }
    console.log(count);

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`4 2
    abcc`);
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