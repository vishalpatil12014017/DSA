function runProgram(input) {
    var arr = input.split("\n");
    var N = +arr[1].trim()
    var str = arr[0].trim().split("")
    var Capital = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ];
    var Small = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ];
    var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var chara = ["-", ",", "/", "%", ":", ".", ";"]
    var res = ""
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < Capital.length; j++) {
            if (str[i] == chara[j]) {
                res += chara[j]
            }
            if (str[i] == number[j]) {
                res += number[(Number(str[i]) + N) % 10];
            }
            if (str[i] == Capital[j]) {
                res += Capital[((j + N) % Capital.length)];
            }
            else if (str[i] == Small[j]) {
                res += Small[((j + N) % Small.length)];
            }
        }
    }
    console.log(res);

}
if (process.env.USERNAME === "Vishal") {
    runProgram(`AaZz190./Usa
    26`);
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