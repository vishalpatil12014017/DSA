function runProgram(input) {
    var arr = input.split("\n");
    var t=+arr[0].trim()
    for (let k = 1; k < t*2+1; k=k+2) {
        var num=+arr[k].trim()
        var data = arr[k+1].trim().split(" ").map(Number);
        var low=0;
        var high=data.length-1;
        var value=greater(data,low,high,num)
     
        if(value!=0 && value<=data.length && value!=-1){
            console.log(data[value-1],data[value]);
        }else if(value==0){
            console.log("Front",data[value]);
        }else {
            console.log(data[data.length-1],"Last");
        }
        
    }
    function greater(data,low,high,num) {
        var result=-1
        while(low<=high){
            let mid=low+Math.floor((high-low)/2)
            if(data[mid]<=num){
                low=mid+1
            }else{
                result=mid;
               high=mid-1
            }
        }
        return result
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    4
    1 3 5 6 8 9
    5 
    1 2 6 7 8
    7
    2 3 4 5 7`);
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