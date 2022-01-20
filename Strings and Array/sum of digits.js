
function runProgram(input) {
  var n = input.split("\n");
  var t = Number(n[0].trim());

  for (var k = 2; k < n.length; k = k + 2) {
    var data = n[k].trim().split("").map(Number);
    console.log('data:', data)
    var data1 = Number(str(data));
    console.log(data1)
  }
  function str(data) {
    var res = 0;
    for (var i = 0; i < data.length; i++) {
      res += data[i]
    }
    return res;
  }
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`2
      5
      12 14 16 17 29
      6
      1 2 3 4 5 51`);
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