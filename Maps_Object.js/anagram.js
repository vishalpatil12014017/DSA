function runProgram(input) {
    var a = input.split("\n");
    var p = a[0].trim().split(" ");
    var q = a[1].trim().split(" ");
    var str = "";
    for (var i = 0; i < q.length; i++) {
        str = str + q[i]
    }
    var str1 = "";
    var data1 = str.trim();
    for (var j = 0; j < p.length; j++) {
        str1 = str1 + p[j]
    }
    var data = str1.trim();

    if (data.length != data1.length) {
        console.log("FALSE")
    } else {

        var obj = {};
        var obj1 = {};

        for (var i = 0; i < data.length; i++) {
            if (obj[data[i]] != undefined) {
                obj[data[i]] += 1;
            } else {
                obj[data[i]] = 1;

            }
        }
        for (var j = 0; j < data1.length; j++) {
            if (obj1[data1[j]] != undefined) {
                obj1[data1[j]] += 1;
            } else {
                obj1[data1[j]] = 1;

            }
        }

        var flag = true;
        var count = 0;
        for (key in obj) {
            if (obj[key] == obj1[key]) {
                flag = true;
                count++;
            } else {
                flag = false;
            }
        }
        if (count == Object.keys(obj).length) {
            console.log("TRUE")
        } else {
            console.log("FALSE")
        }
    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`anagram
  nag a ramp`);
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