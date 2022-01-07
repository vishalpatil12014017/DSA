function runProgram(input) {
    var arr = input.split("\n");
    var [len, k] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    let FirstOccurance = Count_Occurance(data, len, k, true)
    let LastOccurance = Count_Occurance(data, len, k, false)
    console.log(LastOccurance - FirstOccurance + 1);
}
function Count_Occurance(data, len, k, Boolean) {
    let low = 0;
    let high = len - 1;
    let result = 0
    while (high >= low) {
        let mid = low + Math.floor((high - low) / 2)
        if (data[mid] == k) {
            result = mid
            if (Boolean) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else if (data[mid] > k) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return result

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`6 9
    2 3 3 3 3 9`);
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