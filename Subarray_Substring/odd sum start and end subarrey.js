function runProgram(input) {
    var arr= input.split("\n");
   var t=Number(arr[0].trim());
   for(var k=2;k<t*2+1;k=k+2){ 
       var data=arr[k].trim().split(" ").map(Number);
       var count=0;
       for(var i=0;i<data.length;i++){
           for(var j=i;j<data.length;j++){
               if((data[i]+data[j])%2==1){
                   count++
               }
           }
       }
       console.log(count)
   }
  }
  if (process.env.USERNAME === "Vishal") {
  runProgram(`2
  5
  1 2 3 4 5
  5
  1 2 3 4 5`);
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