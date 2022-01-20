function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim()
    var data = arr[1].trim().split(" ").map(Number);
    var low = 0;
    var high = len - 1;
    var Lowerbound = Binarysearch(data, low, high)
    console.log(Lowerbound);

}
function Binarysearch(data, low, high) {
    var last = data[high]
    while (high > low) {
        var mid = low + Math.floor((high - low) / 2);
        if (data[mid] > last) {
            low = mid + 1
        }
        else {
            high = mid
        }
    }
    return data[low]
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