function runProgram(input) {
    var arr= input.split("\n");
    var count=0;
    
    var [len,target]=arr[0].trim().split(" ").map(Number);
    var data=arr[1].trim().split(" ").map(Number); 
    for(var i=0;i<len;i++){
        for(var j=i+1;j<len;j++){
            if(data[i]+data[j]==target){
                count++
            }
        }
    }
    console.log('count:', count)
}
  if (process.env.USERNAME === "Vishal") {
  runProgram(`5 9
  3 0 6 2 7`);
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