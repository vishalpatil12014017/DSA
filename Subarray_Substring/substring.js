function runProgram(input) {
    var n= input.split("\n");
    var t=Number(n[0]);
    for(var k=2;k<=t*2;k=k+2){
      var arr=[];
      var data=n[k].trim().split("");
       for(var i=0;i<data.length;i++){
           for(var j=i;j<data.length;j++){
            var res="";
            for(var l=i;l<=j;l++){
              res+=data[l]
            }  
               arr.push(res)
           }
         
       }
       console.log(arr) 
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