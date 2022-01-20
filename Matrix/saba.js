
function runProgram(input) {
    var n = input.trim().split("\n");
    var [r, c] = n[0].trim().split(" ").map(Number);
    var arr = [];
    var nam = "saba"

    for (var k = 1; k < n.length; k++) {
        var data = n[k].trim().split("");
        arr.push(data);
    }
    var count = 0;
    for (var i = 0; i < r; i++) {
        for (var j = 0; j < c - 3; j++) {           //here we take c-3 beacause after that we can not travers the loop if we travers answer is undefined
            if (arr[i][j] == nam[0] && arr[i][j + 1] == nam[1] && arr[i][j + 2] == nam[2] && arr[i][j + 3] == nam[3]) {
                count++
            }
        }
    }
    for (var i = 0; i < r - 3; i++) {
        for (var j = 0; j < c; j++) {
            if (arr[i][j] == nam[0] && arr[i + 1][j] == nam[1] && arr[i + 2][j] == nam[2] && arr[i + 3][j] == nam[3]) {
                count++
            }
        }
    }
    for (var i = 0; i < r - 3; i++) {
        for (var j = 0; j < c - 3; j++) {
            if (arr[i][j] == nam[0] && arr[i + 1][j + 1] == nam[1] && arr[i + 2][j + 2] == nam[2] && arr[i + 3][j + 3] == nam[3]) {
                count++
            }
        }
    }
    for (var i = 0; i < r - 3; i++) {
        for (var j = 0; j < c - 3; j++) {
            if (arr[i + 3][j] == nam[0] && arr[i + 2][j + 1] == nam[1] && arr[i + 1][j + 2] == nam[2] && arr[i][j + 3] == nam[3]) {
                count++
            }
        }
    }
    console.log(count)

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5 5
      safer
      amjad
      babol
      aaron
      songs`);
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