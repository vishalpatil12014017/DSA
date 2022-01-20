
function runProgram(input) {
  var n = input.split("\n");
  var arr = [];
  for (var k = 1; k < n.length; k++) {
    var data = n[k].trim().split(" ").map(Number)
    arr.push(data)
  }
  console.log(arr)
  for (var j = arr[0].length - 1; j >= 0; j--) {
    var res = "";
    for (var i = 0; i < arr.length; i++) {
      res = res + " " + arr[i][j]

    }
    console.log(res.trim())
  }
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`);
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