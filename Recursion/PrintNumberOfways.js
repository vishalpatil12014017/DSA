//we can take multiple occurance
function runProgram(input) {
    input = input.trim().split("\n");
    var [len, k] = input[0].trim().split(" ").map(Number);
    let data = input[1].trim().split(" ").map(Number)
    let ans=[]
    function Subset(data,len,sets,index) {
        if (sets.length>0) {
            // if (sets.reduce((acc,x)=>acc+x)==k) {
                ans.push([...sets])
            // }   
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
   console.log(ans);
}

if (process.env.USERNAME === "Vishal") {
    runProgram(`4 7
    2 3 6 7`);
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
