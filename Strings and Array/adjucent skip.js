function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var t = Number(newInput[0]);
  for (var i = 0; i < t; i++) {
    var data = newInput[i + 1];
    var n = data.length;
    var flag = false;
    var res = "";
    for (var j = 1; j < n; j++) {
      if (data[j] == data[j-1]) {
          flag=true
      } else {
        res += data[j];
       
      }
    }
    console.log(res.trim());
    //    ab
    //    ab
    //    ababa

  }
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`3
  abb
  aaab
  ababaabaab`);
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