function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    var p = 0;
    for (var k = 0; k < t; k++) {
        var n = newInput[p + 1 + k].trim().split(" ").map(Number);
        var row = n[0];
        var col = n[1];
        var matrix = newInput.slice(p + 2 + k, row + p + 2 + k).map(function (row) {
            return row.trim().split(" ").map(Number);
        });
        p = p + row;
        var top = 0;
        var bottom = row - 1;
        var left = 0;
        var right = col - 1
        var res = "";
        var count = 0;
        var size = row * col - 1
        while (count < size) {
            for (var i = top; i <= bottom; i++) {
                if (count <= size) {
                    res += " " + matrix[i][left]
                    count++
                }
            } left++
            for (var i = left; i <= right; i++) {
                if (count <= size) {
                    res += " " + matrix[bottom][i]
                    count++
                }
            } bottom--
        }
        console.log(res.trim())
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    3 3
    1 2 3
    4 5 6
    7 8 9
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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