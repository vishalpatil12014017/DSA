function runProgram(input) {
    var newinput = input.split("\n");
    var t = +newinput[0].trim()
    for (let m = 1; m < t * 2 + 1; m = m + 2) {
        var len = +newinput[m].trim()
        var data = newinput[m + 1].trim().split("").map(Number);
        var obj={"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0};
        var arr=[];
        for (let i = 0; i < data.length; i++) {
          if(obj[data[i]]!=undefined){
            obj[data[i]]+=1
          }else{
            obj[data[i]]=1
          }
            
        }
        for(key in obj){
            arr.push(obj[key])
        }
        console.log(arr.join(" "))
 
    

    }
}

if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    5
    21321
    6
    235452`);
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