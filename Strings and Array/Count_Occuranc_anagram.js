function runProgram(input) {
    var arr = input.split("\n");
    var str = arr[0].trim().split("").sort()
    var data = arr[1].trim().split("")
    var count = 0;
    for (let i = 0; i <= data.length - str.length; i++) {
        var ans = ""
        for (let k = i; k < i + str.length; k++) {
            ans += data[k]
            //console.log(ans);
        }
        if (ans.split("").sort().join() == str) {
            count++
        }
    }
    console.log(count);
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`foro
    foroferpqrofor`);
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