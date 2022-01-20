function checkPrime(n) {
  if (n == 1) {
    return false
  } if (n == 2) {
    return true;
  }
  else {
    let flag = true;
    for (var i = 2; i * i <= n; i++) {
      if (n % i == 0) {
        flag = false;
      }
    }
    if (flag == true) {
      return true;
    }
    else {
      return false;
    }
  }
}
function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var n = Number(newInput[0]);
  var data = newInput[1].split(" ").map(Number);
  let sum = 0;
  for (let j = 0; j < data.length; j++) {
    for (let k = j + 1; k < data.length; k++) {
      if (checkPrime(k - j) == true) {
        sum += Math.abs(data[k] - data[j])
      }
    }
  }
  console.log(sum)
}
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