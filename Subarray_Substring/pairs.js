function runProgram(input) {
  var N = input.split("\n");
  var n = N[0].trim().split(" ").map(Number);
  var sum = n[1];
  var count = 0;
  var data = N[1].trim().split(" ").map(Number).sort();
  for (var i = 0; i < data.length; i++) {
    for (var j = i + 1; j < data.length; j++) {    //i+1 because it svaes times it starts from i after
      if (data[i] + data[j] == sum) {
        count++
      }
    }
  }
  console.log(count) //2

}

if (process.env.USERNAME === "Vishal") {
  runProgram(`5 9
  3 0 6 2 7 5`);
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