function check(data, len, target) {
  var left = 0;
  var right = len - 1;
  var count = 0;
  data.sort((a, b) => {
    return a - b
  })

  while (left < right) {
    if (data[left] + data[right] == target) {
      count++;
      right--;
      left++
    }
    else if (data[left] + data[right] > target) {
      right--;
    }
    else if (data[left] + data[right] < target) {
      left++;
    }
  }
  return count;
}

function runProgram(input) {
  var arr = input.split("\n");
  var [len, target] = arr[0].trim().split(" ").map(Number);
  var data = arr[1].trim().split(" ").map(Number);
  console.log(check(data, len, target))
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`5 0
  -1 1 -1 1 -1`);
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