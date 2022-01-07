function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0].trim();
    let line = 1;
    for (let i = 0; i < test; i++) {
        let strLen_strTest = input[line++].trim().split(" ").map(Number);
        let main_str = input[line++].trim()
        var ans = []
        let strTest = strLen_strTest[1];
        for (let j = 0; j < strTest; j++) {
            let str = input[line++].trim()

            ans.push(str)
        }
        var flag = false
        for (let i = 0; i < ans.length; i++) {

            if (ans[i][0] == main_str[0]) {
                var res = ans[i]
               for (let j = 0; j < ans.length; j++) {
                var res1 = res
                  res+=ans[j]
                  if (res == main_str) {
                    flag = true

                } if (res != main_str || res.length > main_str.length) {
                    res = res1
                }
                if (j - ans.length != 0) {
                    j++
                }
                   
               }
                // let j = 0
                // while (j < main_str.length && j < ans.length) {
                //     var res1 = res
                //     res += ans[j]
                //     if (res == main_str) {
                //         flag = true

                //     } if (res != main_str || res.length > main_str.length) {
                //         res = res1
                //     }
                //     if (j - ans.length != 0) {
                //         j++
                //     }

                // }
            }

        } if (flag == true || ans.length == 1 && ans[0] == main_str[0]) {
            console.log("Yes");
        } else {
            console.log("No");
        }

    }

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    5 4
    masai
    as
    mas
    ai
    asai
    4 2
    hack
    hac
    ack
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