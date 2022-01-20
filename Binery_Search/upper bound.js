function runProgram(input) {
    var arr = input.split("\n");
    var [len, num] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    var low = 0;
    var high = len - 1;
    var upperbound = Binarysearch(data, low, high, num)
    if(upperbound==-1){
        console.log(Binarysearch(data, low, high, num + 1,true));
    }else{
         console.log(upperbound+1);
    }

}
function Binarysearch(data, low, high, num,boolien) {
    var result = -1;
    while (high >= low) {
        var mid = low + Math.floor((high - low) / 2);
        if (data[mid] == num) {
            result = mid;
            if(boolien){
               high=mid-1
            }else{
               
                low=mid+1
            } 
        }
        else if (num < data[mid]) {
            high = mid - 1

        } else {
            low = mid + 1
        }
    }
    return result
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`7 7
    2 2 2 2 2 7 11`);
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