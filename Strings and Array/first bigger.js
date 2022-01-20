function check(num, data) {
  var arr1 = [];
  for (var j = 0; j < data.length; j++) {
    if (num < data[j]) {
      arr1.push(data[j])
    }
  }
  return arr1
}
function check_first(arr1) {
  var small = arr1[0];
  for (var k = 1; k < arr1.length; k++) {
    if (small > arr1[k]) {
      small = arr1[k]
    }
  }
  return small;
}
function runProgram(input) {
  var arr = input.trim().split("\n");
  var t = Number(arr[2].trim());
  var data = arr[1].trim().split(" ").map(Number);
  for (var i = 3; i < (3 + t); i++) {
    var num = Number(arr[i]);
    var arr2 = check(num, data);
    console.log(check_first(arr2))
  }
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`10
  13 89 81 66 81 63 71 76 73 81
  2
  65
  15
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