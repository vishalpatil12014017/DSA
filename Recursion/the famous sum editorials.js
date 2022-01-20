function runProgram(input) {
    var [n,k] = input.trim().split(" ");
    var res;
   let P = sumDigits(n.toString());
    P = (P*k)
    res = sumDigits(P)
    console.log(res);
}
function sumDigits(str) {
    str=""+str;
    if (str.length == 0) return 0;
    if (str.length == 1) return str;
  
  let  temp = 0
    for (i =0;i<str.length;i++){
        temp += (Number(str[i]));
    }
    return sumDigits(temp)				
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`148 3`);
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