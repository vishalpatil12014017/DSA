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
      console.log(matrix)
    } 
}
    if (process.env.USERNAME === "Vishal") {
      runProgram(`2
      3
      1 8 9
      2 7 10
      3 6 11
      4
      4 8 9 5
      2 6 10 6 
      3 6 11 12
      4 8 9 5`);
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