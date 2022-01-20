function runProgram(input) {
    var arr = input.split("\n");
    var [sum, num] = arr[0].trim().split(" ").map(Number);
    var data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var ans = []
    function subsetofarr(data, index, str) {
        if (str.length > 0 && str.length == num) {
            if (str.reduce((acc, x) => acc + x) == sum) {
                ans.push([...str])
            }
        }
        if (data.length == index) return;
        for (let i = index; i < data.length; i++) {
            str.push(data[i]);
            subsetofarr(data, i + 1, str)
            str.pop()
        }
    }
    var str = []
    subsetofarr(data, 0, str)
    if (ans.length == 0) {
        console.log(-1);
    } else {
        for (let i = 0; i < ans.length; i++) {
            console.log(ans[i].join(" "));

        }
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