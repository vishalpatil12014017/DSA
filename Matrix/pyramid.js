function runProgram(input) {
    var n =Number(input.trim());
    var count=2;
    var steps=0;
    while(n>0){
     var counter=count*(count+1)/2;
      n = n-counter;
      count++;
      steps++  
      
    }
    console.log(steps)
  }
  if (process.env.USERNAME === "Vishal") {
  runProgram(`25`);
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