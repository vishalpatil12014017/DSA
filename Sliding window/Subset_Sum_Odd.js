function runProgram(input) {
    var arr = input.split("\n");
    var len = Number(arr[0].trim())
    var data = arr[1].trim().split(" ").map(Number)
    var count1 = 0;
    function subsetofarr(data, index, str) {
        if (str.length > 0) {
            if (str.reduce((acc, x) => acc + x) % 2 != 0) {
                count1++
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
    console.log(count1)
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    1 2 3`);
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