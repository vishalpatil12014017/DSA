function runProgram(input) {
    var arr = input.split("\n");
    var t = +arr[0].trim()
    for (let k = 1; k < t + 1; k++) {
        var num = +arr[k].trim()
        function sqroot(num) {
            var low = 0;
            var high = num;
            var ans = 0;
            while (low <= high) {
                mid = parseInt((low + high) / 2);
                if (mid * mid == num) {
                    ans = mid;
                    break;
                }
                if (mid * mid < num) {
                    low = mid + 1
                    ans = mid;
                } else {
                    high = mid - 1
                }

            }
            let inc = 0.1;
            for (let i = 0; i < 0; i++) {
                while (ans * ans <= num) {
                    ans += inc
                }
                ans = ans - inc;
                inc = inc / 10
            }
            return ans
        }

        console.log(sqroot(num));

    }

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    4
    8`);
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