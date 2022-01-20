var arr = [5, 6, 11, 1, 1]
var sum = 0
arr.map(x => sum += x)
if (sum % 2 == 1) {
    console.log("no")
} 
else {
    sum = sum / 2
    var dp = [];
    for (let i = 0; i <= arr.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= sum; j++) {
            if (i == 0) {
                dp[i][j] = false
            }
            if (j == 0) {
                dp[i][j] = true
            }
        }
    }
    for (var i = 1; i <= arr.length; i++) {
        for (var j = 1; j <= sum; j++) {
            if (arr[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j - arr[i - 1]] || dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    if (dp[arr.length][sum] == false) {
        console.log("no")
    } else {
        console.log("yes");
    }
}