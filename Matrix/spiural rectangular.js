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
      for (var i = bottom; i >= top; i--) {
        if (count <= size) {
          res += " " + matrix[i][right]
          count++
        }
      } right--

      for (var i = right; i >= left; i--) {
        if (count <= size) {
          res += " " + matrix[top][i]
          count++
        }
      } top++




    }

    console.log(res.trim())
  }

}
if (process.env.USERNAME === "Vishal") {
  runProgram(`2
      3 5
      7 6 1 4 2
      8 1 1 9 7
      7 5 4 6 7
      7 7
      8 3 4 4 1 2 4
      6 5 2 8 5 4 2
      3 9 3 7 3 3 9
      8 8 9 3 5 1 3
      8 7 8 8 4 1 4
      8 9 8 7 3 4 5
      6 9 9 7 2 6 5`);
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