function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim()
    for (let k = 1; k <= len; k++) {
        var [frd1, frd2, frd3] = arr[k].trim().split(" ")
        let i = 0
        let ans = ""
        // while (frd1.length > start && frd2.length > start && frd3.length > start) {
        //     if (frd1[start] == frd2[start] && frd2[start] == frd3[start]) {
        //         ans += frd1[start]
        //         start++
        //     } else {
        //         break;
        //     }
        // }
        for (let i = 0; i < Math.min(frd1.length, frd2.length, frd3.length); i++) {
            if (frd1[i] == frd2[i] && frd2[i] == frd3[i]) {
                ans += frd1[i]
            } else {
                break;
            }

        }
        console.log(ans.length > 0 ? ans : "None")

    }




}
if (process.env.USERNAME === "Vishal") {
    runProgram(`1
    rbbyrrby rbb rbbybbryb`);
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