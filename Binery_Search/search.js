function runProgram(input) {
    var input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number).sort((a,b) => (a-b));
    var cases = +input[2];
    var res = [];
  
    for(var i = 3; i < cases + 3; i++){
  
      var fl = input[i].trim().split(" ").map(Number);
      var f = fl[0];
      var l = fl[1];
      // console.log(arr, n, f, l);
  
      res.push((Binary(arr, n, f, l)))
    }
    console.log(res.join(" "))
  }
  function Binary(arr, n, f, l) {
  
    let low = 0;
    let high = n - 1;
  
    while(low <= high){
  
      let mid = low + Math.floor((high-low)/2);
  
      if(arr[mid] == f){
        high = mid - 1;
      }else if(arr[mid] > f){
        high = mid - 1;
      }else {
        low = mid + 1;
      }
    }
    // return low
  
  
  
    let lo = 0;
    let hig = n - 1;
  
    while(lo <= hig){
  
      let mi = lo + Math.floor((hig-lo)/2);
  
      if(arr[mi] == l){
        lo = mi + 1;
  
      }else if(arr[mi] > l){
        hig = mi - 1;
  
      }else {
        lo = mi + 1;
      }
    }
  
  // console.log(l)
    return lo - low
  }
    
if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    10 1 10 3 4
    4
    1 10
    2 9
    3 4
    2 2
    `);
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