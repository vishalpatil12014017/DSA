function runProgram(input) {
    var N=input.split("\n");
    var n=N[1].trim();
    var count=0;
    for(var i=0;i<n.length;i++){
        for(var j=i;j<n.length;j++){
              if(n[i]=="a" && n[j]=="a"){
                  count++
              }
        }   
    }  console.log(count)
}
if (process.env.USERNAME === "Vishal") {
  runProgram(`7
  abaan`);
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