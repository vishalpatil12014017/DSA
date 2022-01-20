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
    console.log(matrix)
    // [ [ 1, 8, 9 ], [ 2, 7, 10 ], [ 3, 6, 11 ], [ 4, 5, 6 ] ]
    // [ [ 4, 8, 9 ], [ 2, 6, 10 ], [ 3, 6, 11 ], [ 5, 6, 5 ] ]
  }
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`2
      4 3
      1 8 9
      2 7 10
      3 6 11
      4 5 6
      4 3
      4 8 9
      2 6 10
      3 6 11
      5 6 5`);
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