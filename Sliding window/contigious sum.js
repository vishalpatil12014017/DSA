function maxSubarraySum(arr, size) {
    let CurrentSum = 0, OverAllSum = 0;
    for (let i = 0; i < size; i++) {
        if (arr[i] <= CurrentSum + arr[i]) {
            CurrentSum += arr[i];
          
        }
        else {
            CurrentSum = arr[i];
           
        }
        if (CurrentSum > OverAllSum) {
            OverAllSum = CurrentSum;
        }
    }
    return OverAllSum;
}
var a = [1,2,-2,3,-1,-5,7]
console.log(maxSubarraySum(a, a.length))
