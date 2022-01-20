function runProgram(input) {
    var new_input = input.split("\n");
    var matrix = [];
    var n = Number(new_input[0].trim())
    for (var k = 1; k <= n; k++) {
        var data = new_input[k].trim().split(" ").map(Number)
        matrix.push(data)
    }
    var total = n * n;
    var len = Math.floor(n / 2)
    var top = 0;
    var bottom = n - 1;
    var right = n - 1;
    var left = 0;

    for (var j = 0; j < len; j++) {
        var privious = matrix[top + 1][j];
        for (var i = left; i <= right; i++) {
            var temp = matrix[top][i];
            matrix[top][i] = privious;
            privious = temp;
        } top++
        for (var i = top; i <= bottom; i++) {
            var temp = matrix[i][right];
            matrix[i][right] = privious;
            privious = temp;
        } right--
        for (var i = right; i >= left; i--) {
            var temp = matrix[bottom][i];
            matrix[bottom][i] = privious;
            privious = temp;
        } bottom--
        for (var i = bottom; i >= top; i--) {
            var temp = matrix[i][left];
            matrix[i][left] = privious;
            privious = temp;
        } left++
    }
    for (var i = 0; i < matrix.length; i++) {
        var newmatrix = matrix[i].join(" ");
        console.log(newmatrix.trim())
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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