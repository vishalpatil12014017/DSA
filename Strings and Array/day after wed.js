
function runProgram(input) {
    var n= input.split("\n");
    var day=n[0];
    var num=Number(n[1]);
    var day_after=num%7
    var arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
   for(var i=0;i<arr.length;i++){
       if(day==arr[i] && day_after<7-i){
        console.log(arr[i+day_after])
       }
       if(day==arr[i] && day_after>7-i-1){
        console.log(arr[0+(day_after-(7-i))]);
        break;
    }
   }
  // Same as the week of the day question: new day = (old day + k) % length of week.

   
}
    if (process.env.USERNAME === "Vishal") {
      runProgram(`Wednesday
      14`);
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