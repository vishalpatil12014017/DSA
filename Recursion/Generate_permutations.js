//O(n*n!)
// O(n)
function runProgram(input) {
    var arr = input.split("\n");
    var len = Number(arr[0].trim())
    var data = arr[1].trim().split(" ").map(Number);
    function Permutations(data, len, index, res) {
        if (index == len) {
            res.push([...data]);
            return
        }
        for (let i = index; i < len; i++) {
            swap(data, i, index)
            Permutations(data, len, index + 1, res)
            swap(data, i, index)
        }
    }
    function swap(data, i, index) {
        var temp = data[i];
        data[i] = data[index];
        data[index] = temp;
        return

    }
    var res = []
    Permutations(data, len, 0, res)
    res.sort()
    for (let i = 0; i < res.length; i++) {
        console.log(res[i].join(" "));
    }
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