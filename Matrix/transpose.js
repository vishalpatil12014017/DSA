
function runProgram(input) {
  var n = input.split("\n");
  var rc = n[0].trim().split(" ").map(Number);
  var r = rc[0];
  var c = rc[1];
  var arr = [];
  for (var k = 1; k < n.length; k++) {
    var data = n[k].trim().split(" ").map(Number);
    arr.push(data)
  }

  for (var j = 0; j < c; j++) {
    var res = "";
    for (var i = 0; i < r; i++) {
      res = res + " " + arr[i][j]

    }
    console.log(res.trim())
  }


}
if (process.env.USERNAME === "Vishal") {
  runProgram(`5 4
      0 0 0 0
      1 1 1 1
      2 2 2 2
      3 3 3 3
      4 4 4 4`);
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