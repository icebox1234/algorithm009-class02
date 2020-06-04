/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let p2 = 0, p3 = 0, p5 = 0;
    let res = Array.from({ length: n }).fill(1);
    for (let i = 1; i < res.length; ++i) {
        let uglyNum = Math.min(res[p2] * 2, Math.min(res[p3] * 3, res[p5] * 5));
        res[i] = uglyNum;
        if (res[p2] * 2 === uglyNum) {
            ++p2;
        }
        if (res[p3] * 3 === uglyNum) {
            ++p3;
        }
        if (res[p5] * 5 === uglyNum) {
            ++p5;
        }
    }
    return res[res.length - 1];
};
// console.log(nthUglyNumber(10));
// @lc code=end

