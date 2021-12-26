function runProgram(input) {
    var arr = input.split("\n");
    var t = arr[0].trim()
    var data = arr[1].trim().split(" ").map(Number);
    var new_arr = []
    var obj = {};
    for (var i = 0; i < data.length; i++) {
        if (obj[data[i]] != undefined) {
            obj[data[i]] += 1
        } else {
            obj[data[i]] = 1;
        }
    }
    for (key in obj) {
        new_arr.push(key)
    }
    new_arr.sort((a, b) => {
        return a - b
    })
    if (new_arr.length >= 3) {
        console.log(new_arr[0], new_arr[1], new_arr[2])
        console.log(new_arr[new_arr.length - 3], new_arr[new_arr.length - 2], new_arr[new_arr.length - 1])
    } else {
        console.log("Not Possible")
        console.log("Not Possible")
    }
}

if (process.env.USERNAME === "Vishal") {
    runProgram(`10
    -4 -7 -2 -11 -2 -8 0 -122 -66 10`);
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