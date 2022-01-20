
function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim();
    for (let k = 1; k < t + 1; k++) {
        var data = arr[k].trim().split("")
        let flag = false
        let count = 0;
        let newdata = []
        for (let i = 0; i < data.length; i++) {
            if (data[i] == "-") {
                flag = true
            }
            else {
                newdata.push(data[i])
            }
            if (data[i] == 0) {
                count++
            }
        }
        newdata.sort((a, b) => a - b)
        var ans = [];
        if (flag == true) {
            ans.push("-")
            for (let i = newdata.length - 1; i >= 0; i--) {
                ans.push(newdata[i])
            }

        } else {
            if (count == 0) {
                ans = [...newdata]
            } else {
               ans.push(newdata[count])
                for (let i = 0; i < count; i++) {
                    ans.push(0)

                }
                for (let i = count + 1; i < newdata.length; i++) {
                    ans.push(newdata[i])

                }
            }

        }
        console.log(ans.join(""));

    }



}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    533340121
    1002-911
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