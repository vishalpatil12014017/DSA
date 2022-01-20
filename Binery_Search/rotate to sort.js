function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim();
    var data = arr[1].trim().split(" ").map(Number);
    var low = 0;
    var high = len - 1;
    console.log(Binarysearch(data, low, high));

}
function Binarysearch(data, low, high) {
    var result = -1;
    while (high >= low) {

        if (data[low] <= data[high]) {
            return low
        }
        var mid = low + Math.floor((high - low) / 2);
        var next = (mid + 1) % data.length
        var pre = (mid - 1 + data.length) % data.length
        if (data[mid] <= data[next] && data[mid] <= data[pre]) {
            return mid
        }
        else if (data[low] <= data[mid]) {
            low = mid + 1

        } else if (data[mid] <= data[high]) {
            high = mid - 1

        }
    }
    return result
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    1 2 3 4 5 `);
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