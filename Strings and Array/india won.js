function runProgram(input) {
    var arr = input.split("\n");
    var ind_po=arr[0];
    var aust_po=arr[1];
    var ind_mat=arr[2];
    var aust_mat=arr[3];
    if(aust_po<ind_po){
        console.log("India")
    }
    else if(aust_po>ind_po){
        console.log("Australia")
    }
    else if(aust_po==ind_po && ind_mat<aust_mat){
        console.log("India")
    }
    else if(aust_po==ind_po && ind_mat>aust_mat){
        console.log("Australia")
    }
    else if(aust_po==ind_po && ind_mat==aust_mat){
        console.log("Play another game!")
    }
}

if (process.env.USERNAME === "Vishal") {
  runProgram(`580
  600
  12 
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