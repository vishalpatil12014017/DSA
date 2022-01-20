function runProgram(input) {
  var newInput = input.split("\n");
  var t = Number(newInput[0]);
  var p = 0;
  for (var k = 0; k < t; k++) {
    var n = newInput[p + 1 + k].trim().split(" ").map(Number);
    var row = n[0];
    var col = n[1];
    var q = n[2]
    var matrix = newInput.slice(p + 2 + k, row + p + 2 + k).map(function (row) {
      return row.trim().split(" ").map(Number);
    });
    p = p + row;
    var res = "";
    for (var i = 0; i < row; i++) {
      if (q % 2 != 0) {
        if (i % 2 == 0) {
          for (var j = 0; j < col; j++) {
            res += " " + matrix[i][j]
          }
        } else {
          for (var j = col - 1; j >= 0; j--) {
            res += " " + matrix[i][j]
          }
        }
      }
      if (q % 2 == 0) {
        if (i % 2 == 0) {
          for (var j = col - 1; j >= 0; j--) {
            res += " " + matrix[i][j]
          }
        } else {
          for (var j = 0; j < col; j++) {
            res += " " + matrix[i][j]
          }
        }

      }
    }
    console.log(res.trim())
  }
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`2
      3 3 1
      1 2 3
      4 5 6
      7 8 9
      3 3 2
      1 2 3
      4 5 6
      7 8 9
      `);
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