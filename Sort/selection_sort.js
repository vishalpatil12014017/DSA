function runProgram(input) {
    var arr = input.split("\n");
    var data = arr[1].trim().split(" ").map(Number);
    var len = Number(arr[0].trim());
    for (var i = 0; i < len - 1; i++) {
      var min_index = i
      for (var j = i + 1; j < len; j++) {
        if (data[j] < data[min_index]) {
          min_index = j
        }
      } var temp = data[i];
      data[i] = data[min_index];
      data[min_index] = temp
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