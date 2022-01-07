function runProgram(input) {
    var arr = input.split("\n");
    var [len, k] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    console.log(Trplate_sum(data, len, k));
}
function Trplate_sum(data, len, k) {
    let low = 0;
    let high = len - 1;
    let result = 0;
    while (high >= low) {
        let mid = low + Math.floor((high - low) / 2)
        if (Math.abs(Math.max(data[mid], data[mid - 1], data[mid + 1])), Math.min(data[mid], data[mid - 1], data[mid + 1]) <= k) {
            result++
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return result
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`4 3
    1 2 3 4
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