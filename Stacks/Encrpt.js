
function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim();
    for (let k = 1; k < t+1; k++) {
        var data=arr[k].trim()
        var stack=[]
       for (let i = 0; i < data.length; i++) {
          if(data[i]=="#"){
              stack.pop()
          }else{
              stack.push(data[i])
          }
           
       }
       console.log(stack.join(""));
        
    }

   

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    ab#d
    a#bc`);
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