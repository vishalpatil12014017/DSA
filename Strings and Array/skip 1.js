function runProgram(input) {
  var arr = input.split("\n");
  var n = arr[0].trim().split(" ").map(Number);
  var data = arr[1].trim().split(" ").map(Number);
  var dat_length = n[0];
  var max = n[1];
  var skips = 0;
  var count = 0;
  for (var i = 0; i < dat_length; i++) {
    if (data[i] <= max) {
      count++;
    } else {
      skips++;
      if (skips > 1) {
        console.log(count);
        return
      }
    }
  }
  console.log(count)
}

if (process.env.USERNAME === "Vishal") {
  runProgram(`7 6
  4 3 7 6 7 2 2
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