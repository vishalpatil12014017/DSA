//Enter code here
function runProgram(input) {
  var arr = input;
  var num = arr.length;
  var flag = false;
  var count = 0
  for (var i = 0; i < arr.length; i++) {
    var new_arr = "";
    for (var j = i; j < arr.length; j++) {
      new_arr = new_arr + arr[j]
      if (new_arr == "420") {
        count = new_arr.length
        flag = true;

      } 
      console.log(new_arr)

    }

  }
  if (flag == true) {
    console.log("caught")
  } else {
    console.log("Escaped")
  }

}

if (process.env.USERNAME === "Vishal") {
  runProgram(`97430`);
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