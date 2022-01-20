function check(res) {
  var result = "";
  for (var k = res.length - 1; k >= 0; k--) {
    result += res[k];
  }
  if (result == res) {
    return true;
  } else {
    return false;
  }
}
function runProgram(input) {
  var str = input;
  var max = 0;
  for (var i = 0; i < str.length; i++) {
    var res = "";
    for (var j = i; j < str.length; j++) {
      res += str[j];
      console.log(res)
      if (check(res) == true && res.length > max) {
        max = res.length
      }
    }

  }
  console.log(max)
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`thisracecarisgood`);
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