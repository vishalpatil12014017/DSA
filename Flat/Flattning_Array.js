var arr = [1, 2, 3, [5, 6, 7], 6, 7, 8, 9, [7, 8, 9, [3, 2, 1]]]
var ans = [];
Flatten(arr)
function Flatten(data) {
    for (let i = 0; i < data.length; i++) {
        if (Array.isArray(data[i])) {
            Flatten(data[i])
        } else {
            ans.push(data[i])
        }
    }
}
 console.log(ans);

//  Array.prototype.myMap = function (data) {
//     var ans = [];
//     Flatten(data)
//     function Flatten(data) {
//         for (let i = 0; i < data.length; i++) {
//             if (Array.isArray(data[i])) {
//                 Flatten(data[i])
//             } else {
//                 ans.push(data[i])
//             }
//         }
//     }
//     return ans
// };
// const newArr = arr.myMap(arr)
//  console.log(newArr);