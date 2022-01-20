function distinctString(len, data) {
  var obj = {}
  for (start=0; start<len; start++) {
      for (end=start+1; end<=len; end++) {
          var sub_str = ''
          for (i=start; i<end; i++) {
              sub_str += data[i]
          }
          obj[sub_str]=1
      }
  }
  var count = 0
  for (key in obj) {
      count += obj[key]
  }
  console.log(count)
}

function runProgram(input) {
  var input = input.trim().split("\n")
  for (let i = 1; i < input.length; i=i+2) {
      var len = Number(input[i])
      var data = input[i+1].trim()
      distinctString(len, data)
  }
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`2
  5
  abcde
  3
  aaa`);
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