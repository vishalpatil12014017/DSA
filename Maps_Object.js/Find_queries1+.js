function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim()
    var data = arr[1].trim().split(" ").map(Number);
    var len1 = +arr[2].trim()
    var queries = arr[3].trim().split(" ").map(Number);
    var low = 0;
    var high = data.length - 1;
    for (let k = 0; k < len1; k++) {
        console.log(search(data, queries[k], low, high));
    }
    function search(data, q, low, high) {
        while (high >= low) {
            let mid = low + Math.floor((high - low) / 2)
            if (data[mid] == q) {
                return "YES"
            }
            else if (data[mid] > q) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        return "NO"
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    1 2 3 4 5
    3
    3 4 7`);
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