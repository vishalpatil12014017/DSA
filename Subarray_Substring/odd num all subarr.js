function check(subarr){
  var count=0;
  for(var i=0;i<subarr.length;i++){
    var new_arr=subarr[i];
    var cou=0
    for(var j=0;j<new_arr.length;j++){
      if(new_arr[j]%2!=0){
          cou++
      }
    }
    if(cou==new_arr.length){
      count++
    }
  }
  return count;
}
function runProgram(input) {
    var arr= input.split("\n");
   var t=Number(arr[0].trim());
  
   for(var k=2;k<t*2+1;k=k+2){ 
       var data=arr[k].trim().split(" ").map(Number);
       var subarr=[];
       for(var i=0;i<data.length;i++){
           for(var j=i;j<data.length;j++){
             var sub=[];
             for(var l=i;l<=j;l++){
               sub.push(data[l])
             }
             subarr.push(sub)
           } 
       }  
      console.log(check(subarr))
   }

  }
  if (process.env.USERNAME === "Vishal") {
  runProgram(`2
  5
  1 2 3
  5
  2 2 3 4 5`);
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