function check(res) {
  var obj = {}
  for (var i = 0; i < res.length; i++) {
    if (obj[res[i]] != undefined) {  //if +object is empty then assign value is undefined bcz we are assuming that there is a value present that we dont know.
      obj[res[i]] += 1;
    } else {
      obj[res[i]] = 1;
    }
  }
  var count = 0;
  for (key in obj) {
    if (obj[key] > 0) {
      count++
    }
  }
  return count;
}
function check_Input(input) {
  var obj = {}
  for (var i = 0; i < input.length; i++) {
    if (obj[input[i]] != undefined) {  //if +object is empty then assign value is undefined bcz we are assuming that there is a value present that we dont know.
      obj[input[i]] += 1;
    } else {
      obj[input[i]] = 1;
    }
  }
  var count1 = 0;
  for (key in obj) {
    if (obj[key] > 0) {
      count1++
    }
  }
  return count1;
}
function runProgram(input) {
  var str = input;
  var min = input.length;
  for (var i = 0; i < str.length; i++) {
    var res = "";
    for (var j = i; j < str.length; j++) {
      res += str[j];
      if (check(res) == check_Input(input) && res.length < min) {
        min = res.length
      }
    }
  }
  console.log(min)
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`zoomsessionmooz`);
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