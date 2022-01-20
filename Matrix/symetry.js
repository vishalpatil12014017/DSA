function horizontal(matrix, n) {
    var top = 0;
    var bottom = n - 1;
    while (top < bottom) {
        for (var k = 0; k < matrix.length; k++) {
            if (matrix[top][k] != matrix[bottom][k]) {
                return false;
            }
        }
        top++;
        bottom--;

    }
    return true;
}
function vertical(matrix, n) {
    var left = 0;
    var right = n - 1;
    while (left < right) {
        for (var k = 0; k < matrix.length; k++) {
            if (matrix[k][left] != matrix[k][right]) {
                return false;
            }
        }
        left++
        right--;

    }
    return true;
}
function runProgram(input) {
    var arr = input.split("\n");
    var t = Number(arr[0].trim());
    var p = 0;
    for (var k = 0; k < t; k++) {
        var n = Number(arr[p + 1 + k])
        var matrix = arr.slice(p + 2 + k, p + n + 2 + k).map(function (row) {
            return row.trim().split("");
        })
        p += n;
        if (vertical(matrix, n) == true && horizontal(matrix, n) == true) {
            console.log("BOTH")
        }
        else if (vertical(matrix, n) == true && horizontal(matrix, n) != true) {
            console.log("VERTICAL")
        }
        else if (vertical(matrix, n) != true && horizontal(matrix, n) == true) {
            console.log("HORIZONTAL")
        }
        else {
            console.log("NO")
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
4
.*..
*..*
*..*
*.**
4
....
..*.
.**.
.**.`);
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