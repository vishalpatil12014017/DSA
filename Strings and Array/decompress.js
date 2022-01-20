
function runProgram(input) {
  var data = input;
  var a = "123456789"
  var res = ""
  for (var i = 0; i < data.length; i++) {
       if(a.includes(data[i])){
         for(var j = 0;j<Number(data[i]);j++){
             res+=data[i-1];
         }
       }
    }
  console.log(res)   //ans=aaaaab
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`a5b1`);
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