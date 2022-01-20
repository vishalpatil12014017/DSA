function runProgram(input) {
    var arr = input.split("\n");
    var len= +arr[0].trim()
    var data = arr[1].trim().split(" ").map(Number);
    var obj={}
    for (let i = 0; i < len; i++) {
        if(obj[data[i]]!=undefined){
            obj[data[i]]+=1

        }else{
            obj[data[i]]=1
        }
    }
   
    var ans=[]
    for(key in obj){
        ans.push(obj[key])

    }
    console.log(ans.join(" "));
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`10
    0 1 0 1 1 1 0 2 2 0 `);
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