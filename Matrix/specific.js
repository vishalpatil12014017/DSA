
function runProgram(input) {
  var n = input.trim().split("\n");
  var rc = n[0].trim().split(" ");
  var r = rc[0];
  var c = rc[1];
  var arr = [];
  var given = Number(n[n.length - 1].trim());
  for (var k = 1; k < n.length - 1; k++) {
    var data = n[k].trim().split(" ");
    arr.push(data)
  }
  var r1 = 0;
  var c1 = 0;
  var res = "";
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[0].length; j++) {
      res += arr[i][j]
      if (arr[i][j] == given) {
        r1 = i;
        c1 = j;
      }
    }

  }
  console.log(res);
  var arr1 = [];
  var arr2 = [];
  for (var t = 0; t < r; t++) {
    for (var s = 0; s < c; s++) {
      if (t - s == r1 - c1) {
        arr1.push(arr[t][s])
      }
      if (t + s == r1 + c1) {
        arr2.push(arr[t][s])
      }
    }
  }
  console.log(arr1.join(" "));
  console.log(arr2.join(" "));
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`3 3
      1 2 3
      4 5 6
      7 8 9
      6`);
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