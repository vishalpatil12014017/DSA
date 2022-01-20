
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
      console.log(Z(matrix))    // ans= 7 4 1 5 9 6 3
  }
  function Z(matrix){
    var res="";
    for(var i=0;i<matrix.length;i++){
          if(i<1){
            for(var j=0;j<matrix[0].length-1;j++){
              res=res+" "+matrix[i][j]
            }
          }
           for(var j=matrix[0].length;j>=0;j--){
                if(i+j==matrix[0].length-1){
                    res=res+" "+matrix[i][j]
                }
            }
          if(i==matrix.length-1){
            for(var j=1;j<matrix[0].length;j++){
              res=res+" "+matrix[i][j]
            }
          }
         
        }
     return res.trim();   //ans= 1 2 3 5 7 8 9
  }
      
      
  }
      if (process.env.USERNAME === "Vishal") {
        runProgram(`1
        3
        1 2 3
        4 5 6
        7 8 9
        `);
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