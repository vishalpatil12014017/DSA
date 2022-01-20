function runProgram(input) {
    var arr = input.split("\n");
    var [len, num] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").map(Number);
    var low = 0;
    var high = len - 1;
   var firstoccurance= Binarysearch(data, low, high, num,true)
   var lastoccurance= Binarysearch(data, low, high, num,false)
    console.log(lastoccurance-firstoccurance+1);

}
function Binarysearch(data, low, high, num,boolian) {
    var result=0;
    while (high >= low) {
        var mid = low + Math.floor((high - low) / 2);
        if (data[mid] == num){
            result=mid;
            if(boolian){
                high=mid-1
            }
            else{
                low=mid+1
            }
        }
        else if(num<data[mid]){
            high=mid-1

        }else{
            low=mid+1
        }
    }
    return result
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`6 3
    1 3 3 3 3 1`);
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