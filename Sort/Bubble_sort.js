function runProgram(input) {
    var arr = input.split("\n");
    var data = arr[1].trim().split(" ").map(Number);
    var len = Number(arr[0].trim());
    for (var i = 0; i < len - 1; i++) {
      var flag = false;
      for (var j = 0; j < len - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          var temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp
          flag = true;
        }
      }
      if (flag == false) {
        break;
      }
    }
    console.log(data.join(" "))
  }
  if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    3 5 0 9 8`);
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