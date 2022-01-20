function runProgram(input) {
    var arr = input.split("\n");
    var [len, num] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    var findMin = function (nums) {
        var low = 0
        let high = nums.length - 1
        while (low < high) {
            let mid = low + Math.floor((high - low) / 2)
            if (nums[mid] > nums[high]){
                low = mid + 1
            }
            else{
                high = mid
            }
        }
        return nums[low]
    };
    console.log(findMin(data));
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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