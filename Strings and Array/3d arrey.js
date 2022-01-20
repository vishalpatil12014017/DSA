
function runProgram(input) {
    var n= input.split("\n");
    var [N,M,K]=n[0].trim().split(" ").map(Number)
    var arr=[];
    var count=0;
    var data=n[1].trim().split(" ").map(Number)
       for(var i=0;i<N;i++){
         for(var j=0;j<M;j++){
           var arr=[];
           for(var p=0;p<K;p++){
             arr.push(data[count])
             count++
           }
           console.log(arr.join(" "))
         }
       }  
}
    if (process.env.USERNAME === "Vishal") {
      runProgram(`2 2 2
      1 2 3 4 5 6 7 8`);
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