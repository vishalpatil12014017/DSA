function runProgram(input) {
  var n = input.trim();
  function end() {
    var count = 0;
    for (var i = 0; i < n.length; i++) {
      for (var j = i; j < n.length; j++) {
        if (n[i] == n[j]) {
          count++
        }
      }
    } return count;
  }
  console.log(end())

}

if (process.env.USERNAME === "Vishal") {
  runProgram(`abcaba`);
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