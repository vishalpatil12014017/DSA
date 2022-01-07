function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let p = 1; p < t * 2 + 1; p = p + 2) {
        var str1 = arr[p].trim().split("")
        var str2 = arr[p + 1].trim().split("")
        var m = str1.length;
        var n = str2.length
        var ans=[]
        var j=0
        for (let i = 0; i <n &&j<m; i++) {
           if (str1[j]==str2[i]) {
               j++
           }
        }
     
        if (j==m) {
            console.log("YES");
        }else{
            console.log("NO");
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    abc
    adbce
    xa
    ax`);
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