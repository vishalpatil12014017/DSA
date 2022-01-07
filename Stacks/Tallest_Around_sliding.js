function runProgram(input) {
    var arr = input.split("\n");
    var t = arr[0].trim()
    for (var k = 1; k < t * 2 + 1; k = k + 2) {
        var [len, num] = arr[k].trim().split(" ").map(Number);
        var data = arr[k + 1].trim().split(" ").map(Number);
        var stack = [];
        var max = 0;
        var sum = 0
        for (let i = 0; i < num; i++) {
            sum+=data[i]
            max=Math.max(max,data[i])   
        }
        stack.push(max)
        var pri=sum
        for (let i = num; i < len ; i++) {
           sum+=data[i]-data[i - num]
            if (sum<=pri) {
                stack.push(stack[stack.length-1])
            }else if(data[i]>stack[stack.length-1]&& sum>pri){
                stack.push(data[i])
            }else{
                stack.push(stack[stack.length-1])
            }
            pri=sum
            
        }
        console.log(stack.join(" "));
    }
}
//  3 3 4 5 5 5 6
if (process.env.USERNAME === "Vishal") {
    runProgram(`1
    9 3
    1 2 3 1 4 5 2 3 6`);
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