function check_alpha(data) {
  var char = "abcdefghijklmnopqrstuvwxyz"
  var flag = false
  for (j = 0; j < data.length; j++) {
    for (k = 0; k < char.length; k++) {
      if (data[j] == char[k]) {
        flag = true
      }
    }
  }
  return flag;
}
function check_num(data) {
  var num = "0123456789"
  var flag = false
  for (j = 0; j < data.length; j++) {
    for (k = 0; k < num.length; k++) {
      if (data[j] == num[k]) {
        flag = true
      }
    }
  }
  return flag;
}
function runProgram(input) {
  var arr = input.split("\n")
  var t = Number(arr[0])
  for (i = 1; i < 2 * t; i = i + 2) {
    var data = arr[1 + i].trim().split("")
    var alpha = check_alpha(data)
    var num = check_num(data)
    if (alpha && num) {
      console.log("alphanumeric")
    }
    else {
      if (alpha) {
        console.log("chars")
      }
      if (num) {
        console.log("numbers")
      }
    }
  }
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`3
    5
    ab2cd
    5
    acfgh
    3
    123`);
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