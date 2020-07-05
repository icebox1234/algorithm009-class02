/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let field = new Array(n);
    for (let i = 0; i < field.length; ++i) {
        field[i] = new Array(n).fill('.');
    }
    let queenLocation = [];
    let res = [];
    function findQueensLOcation(queenLocation, nthQueen, level) {
        if (nthQueen >= n) {
            console.log(field);
            res.push(Array.from(field.map(item => {
                return item.join('')
            })));
        }
        for (let i = level; i < field.length; ++i) {
            for (let j = 0; j < field[i].length; ++j) {
                if (queenLocation.findIndex(queen => {
                    return queen.x === j || queen.y === i || queen.tan45 === (i - j) || queen.tan135 === (i + j);
                }) === -1) {
                    field[i][j] = 'Q';
                    queenLocation.push({ x: j, y: i, tan45: (i - j), tan135: (i + j) });
                    findQueensLOcation(queenLocation, nthQueen + 1, i + 1);
                    queenLocation.pop();
                    field[i][j] = '.';
                }
            }
            if (field[i].every(item => item !== 'Q')) {
                break;
            }
        }
    }
    findQueensLOcation(queenLocation, 0, 0);
    return res;
};
// console.log(solveNQueens(4));
// @lc code=end

