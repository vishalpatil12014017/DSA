function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim()
    var data = arr[1].trim().split(" ").map(Number);
    data.sort((a, b) => {
        return a - b
    })
    for (var k = 3; k < arr.length; k++) {
        var [start, end] = arr[k].trim().split(" ").map(Number);
        if (start == 0) {
            console.log((len - lowerBound(data, len, end)))
        } else {
            console.log((len - UpperBound(data, len, end)))
        }
    }
}
function lowerBound(arr, len, num) {
    let low = 0;
    let high = len;
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2)
        if (arr[mid] >= num) {
            high = mid
        } else {
            low = mid + 1
        }
    }
    return low
}

function UpperBound(arr, len, num) {
    let low = 0;
    let high = len
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2)
        if (arr[mid] <= num) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return low
}

if (process.env.USERNAME === "Vishal") {
    runProgram(`4
    1 2 3 4
    3
    0 5
    1 3
    0 3`);
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