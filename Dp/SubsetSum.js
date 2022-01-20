function runProgram(input) {
    var arr = input.split("\n");
    var len= +arr[0].trim()
    var data = arr[1].trim().split(" ").map(Number);
    var sum=+arr[2].trim()
    var newarr=[]
    function subsetofarr(data,index,str) {
        if(str.length>0)newarr.push([...str])
        if(data.length==index)return;
        for (let i = index; i < data.length; i++) {
            str.push(data[i]);
            subsetofarr(data,i+1,str)
            str.pop()    
        }
    }
    var str=[]
    subsetofarr(data,0,str)
    var flag=false
    for (let m = 0; m < newarr.length; m++) {
        var sum1=0
          for (let n = 0; n < newarr[m].length; n++) {
            sum1+=newarr[m][n]
              
          }
          if(sum1==sum){
              flag=true;
              break;
          }     
    }
    if (flag==true) {
        console.log("yes");
    }else{
        console.log("no");
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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