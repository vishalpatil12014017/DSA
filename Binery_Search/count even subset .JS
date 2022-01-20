function runProgram(input) {
    var newinput = input.split("\n");
    var t = +newinput[0].trim()
    for (let m = 1; m < t * 2 + 1; m = m + 2) {
        var [len, k] = newinput[m].trim().split(" ").map(Number);
        var data = newinput[m + 1].trim().split(" ").map(Number);
        var newarr = [];
        var str=[];
        subset(data, 0, str);
        function subset(data, index, str) {
            if (str.length > 0) newarr.push([...str])
            if (data.length == index) return;
            for (let i = index; i < data.length; i++) {
                str.push(data[i]);
                subset(data, i + 1, str);
                str.pop()
            }
        }
        var res=0
        for (let i = 0; i < newarr.length; i++) {
            var count=0
           for (let j = 0; j < newarr[i].length; j++) {
              if(newarr[i][j]%2==0){
                  count++
              }
             
           }
           if(count>=k){
               res++
           }
            
        }
        console.log(res)

    }
}

if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    4 2
    4 3 2 1
    2 1
    2 3`);
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