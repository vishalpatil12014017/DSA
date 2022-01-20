function runProgram(input) {
    var arr = input.split("\n");
    var [len, k] = arr[0].trim().split(" ").map(Number);
    var data = arr[1].trim().split(" ").sort((a,b)=>{
       return a-b
    }).map(Number);
    var low = 0;
    var high = len - 1;
    for (let i = 2; i < k + 2; i++) {
        var num= Number(arr[i].trim())
        console.log(Binarysearch(data, low, high, num));
    }
 

}
function Binarysearch(data,low,high,num) {
    while(high>=low){
        var mid=low+Math.floor((high-low)/2);
        if(data[mid]==num)return 'YES'
        if(data[mid]>num){
           return Binarysearch(data,low,mid-1,num)
        }else{
            return Binarysearch(data,mid+1,high,num)
        }
    }
    return 'NO'
}
if (process.env.USERNAME === "Vishal") {
    runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    10`);
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