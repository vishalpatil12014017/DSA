function runProgram(input) {
    var arr = input.split("\n");
    for (var k = 1; k < arr.length; k = k + 4) {
        let len1 = +arr[k].trim()
        var data1 = arr[k + 1].trim().split(" ").map(Number);
        let len2 = +arr[k + 2].trim()
        var data2 = arr[k + 3].trim().split(" ").map(Number);
        let data = [];
        let start = 0;
        let end = 0;
        while (start < len1 && end < len2) {
            if (data1[start] === data2[end]) {
                data.push(data1[start])
                start++;
                end++
            } else if (data1[start] > data2[end]) {
                end++
            } else {
                start++
            }
        }
        console.log(data.length > 0 ? data.join(" ") : -1);

    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    6
    1 2 3 4 5 6
    3
    3 3 5
    4 
    1 2 3 4
    4 
    5 6 7 8`);
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