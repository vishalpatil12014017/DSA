function runProgram(input) {
    var arr = input.split("\n");
    var [len, num] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    var low = 0;
    var high = len - 1;
    var index = Binarysearch(data, low, high)
    console.log(index);
    var ans1 = BinarysearchFind(data, low, index, num)
    var ans2 = BinarysearchFind(data, index, high, num)
    if (ans1 != -1) {
        console.log(ans1)
    }
    else if (ans2 != -1) {
        console.log(ans2)
    }
    else {
        console.log("-1")
    }
}
function BinarysearchFind(data, low, high, num) {
    while (high >= low) {
        var mid = low + Math.floor((high - low) / 2);
        if (data[mid] == num) return mid
        if (data[mid] > num) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
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
    runProgram(`5 2
    3 4 5 1 2`);
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