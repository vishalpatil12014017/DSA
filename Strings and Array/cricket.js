// You are given an array of  N integers. Write a program that prints "Greater" (without quote) if the sum of all elements present in the array is greater than 100, else print "Lesser" (without quotes).
function runProgram(input) {

    var n = input.split(" ").map(Number);
    var current_high=n[0];
    var sachin_current=n[1];
if(current_high>sachin_current){
    console.log("Not Yet")
}
else if(current_high<sachin_current){
    console.log("Broken")
}
else{
    console.log("Wao")
}
}

if (process.env.USERNAME === "Vishal") {
  runProgram(`264 200`);
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