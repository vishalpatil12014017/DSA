var arr = [1, 2, 3, 5]
var diff = 1
var dp = [];
var ans = 0;
arr.map(x=>ans+=x)
var sum = (ans + diff) / 2
for (let i = 0; i <= arr.length; i++) {
    dp[i] = [];
    for (let j = 0; j <= sum; j++) {
        if (i == 0) {
            dp[i][j] = 0
        }
        if (j == 0) {
            dp[i][j] = 1
        }
    }
}
for (var i = 1; i <= arr.length; i++) {
    for (var j = 1; j <= sum; j++) {
        if (arr[i - 1] <= j) {
            dp[i][j] = dp[i - 1][j - arr[i - 1]] + dp[i - 1][j]
        } else {
            dp[i][j] = dp[i - 1][j]
        }
    }
}
console.log(dp[arr.length][sum]);

