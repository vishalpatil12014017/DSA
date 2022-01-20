
function runProgram(input) {
  var n = input.split("\n");
  var arr = [];
  for (var k = 1; k < n.length; k++) {
    var data = n[k].trim().split(" ").map(Number)
    arr.push(data)
  }
  var res = ""
  for (var j = arr[0].length - 1; j >= 0; j--) {
    for (var i = 0; i < arr.length; i++) {
      res = res + " " + arr[i][j]

    }
  }
  console.log(res.trim())   //ans= 9 10 11 12 8 7 6 5 1 2 3 4
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`4 3
      1 8 9
      2 7 10
      3 6 11
      4 5 12`);
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