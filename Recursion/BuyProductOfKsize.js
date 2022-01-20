function runProgram(input) {
    var arr = input.split("\n");
    var [len, k] = arr[0].trim().split(" ").map(Number);
    var data = []
    for (let i = 1; i <= len; i++) {
        data.push(i)
    }
    let ans=[]
    function Subset(data,len,sets,index) {
        if (sets.length==k) {
            ans.push([...sets])
        }
        if (index==len) {
            return
        }
        for (let i = index; i < len; i++) {
            sets.push(data[i]);
            Subset(data,len,sets,i+1);
            sets.pop()
            
        }
    }
   let sets=[];
   Subset(data,len,sets,0)
   for (let i = 0; i < ans.length; i++) {
       console.log(ans[i].join(" "));
       
   }

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`8 2`);
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