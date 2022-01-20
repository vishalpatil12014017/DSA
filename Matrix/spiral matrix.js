
function runProgram(input) {
  var new_input= input.split("\n");
  var matrix=[];
  var n=Number(new_input[0].trim())
  for(var k=1;k<=n;k++){
    var data=new_input[k].trim().split(" ").map(Number)
     matrix.push(data)
  }
      var top=0;
      var bottom=n-1;
      var left=0;
      var right=n-1
      var res="";
  var count=0;
  var size=n*n
  while(count<size){
   for(var i=left;i<=right;i++){
     res+=" "+matrix[top][i]
     count++
   }top++
   for(var i=top;i<=bottom;i++){
     res+=" "+matrix[i][right]
     count++
   }right--
   for(var i=right;i>=left;i--){
     res+=" "+matrix[bottom][i]
      count++
   }bottom--
   for(var i=bottom;i>=top;i--){
    res+=" "+matrix[i][left]
    count++
  }left++
  }
console.log(res.trim())
}
      if (process.env.USERNAME === "Vishal") {
        runProgram(`4
        1 2 3 4
        5 6 7 8
        1 2 3 4
        5 6 7 8`);
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