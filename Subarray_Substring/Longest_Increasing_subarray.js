function runProgram(input) {
  var N = input.split("\n");
  for (var i = 2; i < N.length; i = i + 2) {
    var n = N[i].trim().split(" ").map(Number);
    console.log(longest(n))
  }
  function longest(n) {
    var max = 1;
    var len = 1;
    for (var i = 1; i < n.length; i++) {
      if (n[i] >= n[i - 1]) {
        len++
      }
      else {
        len = 1;
      }
      if (max < len) {
        max = len;
      }
    }
    return max;

  }
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`2
  2
  -3 -2 -10 1 5 -5 9
  6
  1 2 -1 2 -3 -1 -5
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