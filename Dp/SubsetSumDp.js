var arr = [3, 34, 4, 12, 5, 2]
var sum = 9
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
console.log(dp);
console.log(dp[arr.length][sum]);