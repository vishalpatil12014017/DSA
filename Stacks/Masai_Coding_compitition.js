function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim()
    var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];
    var que = []
    for (var k = 1; k <= len; k++) {
        var [letter, num1, num2] = arr[k].trim().split(" ")
        if (letter == "E") {
            switch (num1) {
                case "1":
                    if (que.length == 0 || !que.includes("1")) {
                        que.push("1");
                    }
                    list1.push(num2)
                    break;

                case "2":
                    if (que.length == 0 || !que.includes("2")) {
                        que.push("2");
                    }
                    list2.push(num2)
                    break;

                case "3":
                    if (que.length == 0 || !que.includes("3")) {
                        que.push("3");
                    }
                    list3.push(num2)
                    break;

                case "4":
                    if (que.length == 0 || !que.includes("4")) {
                        que.push("4");
                    }
                    list4.push(num2)
                    break;

            }
        }
        else {
            if (!que.length == 0) {
                let start = que[0];
                switch (start) {
                    case "1":
                        console.log(1, list1.shift());
                        if (list1.length == 0) {
                            que.shift()
                        }
                        break;
                    case "2":
                        console.log(2, list2.shift());
                        if (list2.length == 0) {
                            que.shift()
                        }
                        break;
                    case "3":
                        console.log(3, list3.shift());
                        if (list3.length == 0) {
                            que.shift()
                        }
                        break;
                    case "4":
                        console.log(4, list4.shift());
                        if (list4.length == 0) {
                            que.shift()
                        }
                        break;

                }

            }

        }

    }
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D`);
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