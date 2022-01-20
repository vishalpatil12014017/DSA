function check(data,len,target){
    var left=0;
    var right=len-1;
    while(left<right){
      if(data[left]+data[right]==target){    
          return `${left} ${right}`
      }
      else if(data[left]+data[right]>target){
          right--;
      }
      else if(data[left]+data[right]<target){
          left++;
      }      
   }
   return ("-1 -1");
}
function runProgram(input) {
    var arr= input.split("\n");
   var t= Number(arr[0].trim());
   for(var k=1;k<t*2+1;k=k+2){
       var [len,target]=arr[k].trim().split(" ").map(Number);
       var data=arr[k+1].trim().split(" ").map(Number);
       console.log(check(data,len,target) )
    }
 
  }
  if (process.env.USERNAME === "Vishal") {
  runProgram(`3
  4 9
  2 7 11 15
  5 10
  1 2 3 5 5
  2 100
  48 49`);
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