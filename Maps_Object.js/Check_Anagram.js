function runProgram(input) {
    input = input.trim().split("\n");
    let test = +input[0].trim()
    let line = 1
    for (let i = 0; i < test; i++) {
        let num = +input[line++].trim()
        var ans = []
        for (let j = 0; j < num; j++) {
            let str = input[line++].trim().split("").sort().join("")
            ans.push(str)
        }
        var obj = {}
        var count = 0
        for (let i = 0; i < num; i++) {
            if (obj[ans[i]] != undefined) {
                count += obj[ans[i]]
                obj[ans[i]]++
            } else {
                obj[ans[i]] = 1
            }

        }
      
        console.log(count);

    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    5
    aaaaabbbbb
    baabbbbaaa
    aaaabbbbba
    xxxxxxxxxy
    yxxxxxxxxy
    2
    abcdefghij
    jighdefabc
    `);
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