
function runProgram(input) {
  var n = input.trim().split("\n");
  var [r, c, s] = n[0].trim().split(" ").map(Number);
  var arr = [];
  for (var k = 1; k < n.length; k++) {
    var data = n[k].trim().split(" ").map(Number);
    arr.push(data);
  }
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[0].length; j++) {
      if (i < arr.length - 2) {
        var sum = 0;
        sum += arr[i][j] * arr[i + 1][j] * arr[i + 2][j];
        if (sum == s) {
          count++
        }
      }
      if (j < arr[0].length - 2) {
        var sum = 0;
        sum += arr[i][j] * arr[i][j + 1] * arr[i][j + 2];
        if (sum == s) {
          count++
        }
      }
      if (j < arr[0].length - 2 && i < arr.length - 2) {
        var sum = 0;
        sum += arr[i][j] * arr[i + 1][j + 1] * arr[i + 2][j + 2];
        if (sum == s) {
          count++
        }
      }
      if (j < arr[0].length - 2 && i < arr.length - 2) {
        var sum = 0;
        sum += arr[i][j + 2] * arr[i + 1][j + 1] * arr[i + 2][j];
        if (sum == s) {
          count++
        }
      }
    }
  }
  console.log(count)

}
if (process.env.USERNAME === "Vishal") {
  runProgram(`3 3 6
      3 2 1
      2 2 2
      1 5 1`);
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