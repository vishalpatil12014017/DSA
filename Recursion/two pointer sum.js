function runProgram(input) {
    var arr = input.split("\n");
    var t = Number(arr[0].trim())
    for (var k = 1; k < t * 2; k = k + 2) {
        var [len, p] = arr[k].trim().split(" ").map(Number);
        var data = arr[k + 1].trim().split(" ").map(Number);
      function checkTwoPointer(data, left, right,p){
            if (left == data.length || right < 0) return false;
            if (left == right) return false;
            if (data[left] + data[right] ==p) return true;
            return checkTwoPointer(data, left + 1, right,p) || checkTwoPointer(data, left, right - 1,p);
        }

        console.log(checkTwoPointer(data, 0, len - 1,p))
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`2
    3 7
    1 5 2
    5 9
    3 5 6 1 8`);
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