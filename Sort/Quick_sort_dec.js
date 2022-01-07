function quickSort(data, low, high) {
    if (low <= high) {
      let pivot = partition_r(data, low, high)
      quickSort(data, low, pivot - 1)
      quickSort(data, pivot + 1, high)
    }
  }
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function partition_r(data, low, high) {
  
    let random = randomInteger(low, high)
  
    let temp = data[random];
    data[random] = data[low];
    data[low] = temp;
  
    return partition(data, low, high);
  }
  function partition(data, low, high) {
    let pivot = low;
    let i = low;
    let j = high;
    while (i < j) {
      while (data[i] >= data[pivot]) {
        i++;
      }
      while (data[j] < data[pivot]) {
        j--;
      }
      if (i < j) {
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
    let temp = data[j];
    data[j] = data[pivot];
    data[pivot] = temp;
    return j;
  }
  function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim()
    var data = arr[1].trim().split(" ").map(Number)
    quickSort(data, 0, len - 1);
    console.log(data.join(" "))
  }
  if (process.env.USERNAME === "Vishal") {
    runProgram(`5
    2 3 1 4 5`);
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