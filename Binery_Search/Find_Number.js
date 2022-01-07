function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim();
    var data = arr[1].trim().split(" ").map(Number);
    var k = +arr[2].trim();
    console.log(BineryFind(data, len, k));
}
function BineryFind(data, len, k) {
    let low = 0;
    let high = len - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        if (data[mid] == k) {
            return mid
        }
        else if (data[mid] > k) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    1 2 3 5 6
    6`);
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