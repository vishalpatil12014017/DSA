
function runProgram(input) {
  var newInput = input.split("\n");
  var t = Number(newInput[0].trim());
  var p=0;
  for(var k=0;k<t;k++){
    var n=Number(newInput[p+1+k].trim());
    var matrix = newInput.slice(p+2+k, n+p+2+k).map(function (row) {
    return row.trim().split(" ").map(Number);
    });
    p=p+n;
        for(var j=0;j<n;j++){
          var res="";
          for(var i=n-1;i>=0;i--){
              res=res+" "+matrix[i][j]   
          }
          console.log(res.trim())
      }
    }
}
    if (process.env.USERNAME === "Vishal") {
      runProgram(`2
      4
      1 2 3 4
      5 6 7 8
      1 2 3 4
      5 6 7 8
      3
      1 2 3
      4 5 6
      7 8 9`);
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