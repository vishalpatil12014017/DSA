function runProgram(input) {
  var data = input.trim().split(" ").map(Number);
  var i = 0;
  var j = i;
  var sum = 0;
  var n = data.length;
  while (i < n - 1 && j < n) {
    sum = sum + data[j]
    if (sum == 0) {
      console.log(i, j)
    }
    if (j < n - 1) {
      j++
    }
    else {
      i++
      j = i
      sum = 0
    }
  }
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`6 3 -1 -3 4 -2 2 4 6`);
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