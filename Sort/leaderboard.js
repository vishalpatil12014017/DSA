function runProgram(input) {
  var arr = input.split("\n");
  var len = Number(arr[0].trim());
  var marks_arr = [];
  var name_arr = [];
  for (var k = 1; k < len + 1; k++) {
    var [string, marks] = arr[k].trim().split(" ")
    marks_arr.push(marks)
    name_arr.push(string)
  }
  function checkStrings(a, b) {
    var n = a.length;
    var m = b.length;
    for (var i = 0; i < Math.min(n, m); i++) {
      if (a.charCodeAt(i) != b.charCodeAt(i)) {
        if (a.charCodeAt(i) > b.charCodeAt(i)) {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  }
  for (var i = 0; i < name_arr.length - 1; i++) {
    for (var j = 0; j < name_arr.length - i - 1; j++) {
      if (checkStrings(name_arr[j], name_arr[j + 1]) == true) {
        var temp1 = name_arr[j];
        name_arr[j] = name_arr[j + 1];
        name_arr[j + 1] = temp1;

        var temp = marks_arr[j];
        marks_arr[j] = marks_arr[j + 1];
        marks_arr[j + 1] = temp
      }
    }
  }
  for (var i = 0; i < marks_arr.length - 1; i++) {
    var flag = false;
    for (var j = 0; j < marks_arr.length - i - 1; j++) {
      if (marks_arr[j] < marks_arr[j + 1]) {
        var temp = marks_arr[j];
        marks_arr[j] = marks_arr[j + 1];
        marks_arr[j + 1] = temp

        var temp1 = name_arr[j];
        name_arr[j] = name_arr[j + 1];
        name_arr[j + 1] = temp1
        flag = true;
      }
    }
    if (flag == false) {
      break;
    }
  }
  var rank = 1;
  var count = 0;
  var privious = 0;
  for (var i = 0; i < name_arr.length; i++) {
    if (privious == marks_arr[i]) {
      console.log(rank, name_arr[i])
    }
    else {
      rank += count;
      console.log(rank, name_arr[i]);
      count = 0;
    }
    count++;
    privious = marks_arr[i]

  }
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`6
  rancho 45
  chatur 45
  raju 45
  farhan 30
  virus 45
  joy 45`);
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