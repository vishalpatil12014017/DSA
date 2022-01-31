// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
let board = [
    [0, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [0, 1, 0]
]
var gameOfLife = function (board) {
    let next = JSON.parse(JSON.stringify(board));
    //let next = board.map(arr => arr.slice())
    // console.log(next);
    // console.log(board);
    for (let i = 0; i < next.length; i++) {
        for (let j = 0; j < next[0].length; j++) {
            const num = numLiveNeighbors(next, i, j);
            // console.log(num);
            if (num < 2 || num > 3) {
                board[i][j] = 0;
            } else if (num === 3) {
                board[i][j] = 1;
            }
        }
    }
  
};

var numLiveNeighbors = (board, i, j) => {
    let sum = 0;
    sum += !!board[i - 1]?.[j];
    sum += !!board[i - 1]?.[j - 1];
    sum += !!board[i - 1]?.[j + 1];
    sum += !!board[i + 1]?.[j];
    sum += !!board[i + 1]?.[j - 1];
    sum += !!board[i + 1]?.[j + 1];
    sum += !!board[i]?.[j - 1];
    sum += !!board[i]?.[j + 1];
    return sum;
};
gameOfLife(board);
console.log(board);
// const dir = [
//     [-1, 1],
//     [1, -1],
//     [1, 1],
//     [-1, 0],
//     [0, 1],
//     [1, 0],
//     [0, -1],
//     [-1, -1],
// ];
// const gameOfLife = function (board) {
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             const n = dir.reduce((n, [x, y]) => n += ((board[i + x] && board[i + x][j + y]) || 0) % 10, 0);
//             if (n === 3 || (n === 2 && board[i][j])) {
//                 board[i][j] += 10;
//             }
//         }
//     }
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             board[i][j] = Math.floor(board[i][j] / 10);
//         }
//     }
// };