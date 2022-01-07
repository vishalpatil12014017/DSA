function runProgram(input) {
    var arr = input.split("\n");
    var [len, k] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").sort((a,b)=>{
        return a-b
    }).map(Number);
    console.log(CheckHeight(data, len, k));
}
function CheckHeight(data, len, k) {
    return data

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`4 7
    20 15 10 17`);
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