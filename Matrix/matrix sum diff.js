function runProgram(input) {
  var newInput = input.split("\n");
  var t = 2;
  var p = 0;
  var arr = [];
  for (var k = 0; k < t; k++) {
    var [row, col] = newInput[p + k].trim().split(" ").map(Number);
    var matrix = newInput.slice(p + 1 + k, row + p + 1 + k).map(function (row) {
      return row.trim().split(" ").map(Number);
    });
    p = p + row;
    var sum = 0;
    for (var i = 0; i < row; i++) {
      for (var j = 0; j < col; j++) {
        sum = sum + matrix[i][j];
      }
    }
    arr.push(sum)
  }
  arr.sort()
  console.log(arr[1])
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`3 4
      1 2 3 4
      0 5 6 1
      9 3 0 8
      2 2
      8 8
      8 8`);
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