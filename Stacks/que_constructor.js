
function runProgram(input) {
    var arr = input.split("\n");
    var len = +arr[0].trim()
    var que = []
    class Queue {
        constructor()
        {
            this.S1 = new Stack()
            this.S2 = new Stack()
        }
        push(value) {
            while(!this.S1.isEmpty()) {
              this.S2.push(this.S1.top());
            this.S1.pop();
          }
          this.S1.push(value)
          while(!this.S2.isEmpty()) {
              this.S1.push(this.S2.top())
            this.S2.pop();
          }
        }
        pop() {
               this.S1.pop();
        }
        front() {
            return this.S1.top();
        }
        isEmpty() {
            return this.S1.isEmpty();
        }
    }
    for (var k = 1; k <= len; k++) {
        var stack1=new Stack()
        var [letter, num] = arr[k].trim().split(" ")
        if (letter == "Push") {
            que.push(num)
        } else {
            if (que.length == 0) {
                console.log("Empty");
            } else {
                console.log(que.pop());
            }
        }

    }
}

if (process.env.USERNAME === "Vishal") {
    runProgram(`3
    Push 4
    Push 5
    Pop`);
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