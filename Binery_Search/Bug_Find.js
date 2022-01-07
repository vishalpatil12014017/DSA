function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim()
    var data = arr[1].trim().split(" ").map(Number);
    console.log(Find_Bug(data, len));

}
function Find_Bug(data, len) {
    let low = 0;
    let high = len - 1;
    let result = -1;
    while (high >= low) {
        let mid = low + Math.floor((high - low) / 2)
        if (data[mid] == 1) {
            result = mid;
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return result

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    0 0 0 0 0`);
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