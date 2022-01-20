
function runProgram(input) {
  var newInput = input.split("\n");
  var t = Number(newInput[0].trim());
  var p = 0;
  for (var k = 0; k < t; k++) {
    var n = Number(newInput[p + 1 + k].trim());
    var matrix = newInput.slice(p + 2 + k, n + p + 2 + k).map(function (row) {
      return row.trim().split(" ").map(Number);
    });
    p = p + n;
    console.log(N_reverse(matrix))    // ans= 7 4 1 5 9 6 3
  }
  function N_reverse(matrix) {
    var res = "";
    for (var j = 0; j < matrix[0].length; j++) {
      if (j < 1) {
        for (var i = 0; i < matrix.length; i++) {
          res = res + " " + matrix[i][j]
        }
      }
      if (j > 0) {
        for (var i = matrix.length - 2; i >= 0; i--) {
          if (i + j == matrix[0].length - 1) {
            res = res + " " + matrix[i][j]
          }
        }
      }
      if (j > matrix[0].length - 2) {
        for (var i = 1; i < matrix.length; i++) {
          res = res + " " + matrix[i][j]
        }
      }

    }
    return res.trim();  //ans= 1 4 7 5 3 6 9
  }


}
if (process.env.USERNAME === "Vishal") {
  runProgram(`1
        3
        1 2 3
        4 5 6
        7 8 9`);
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