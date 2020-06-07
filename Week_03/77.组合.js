/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let res = [];
    let oneOfRes = [];
    function combineFn(currentNum, k, oneOfRes) {
        if (oneOfRes.length >= k) {
            res.push(Array.from(oneOfRes));
            return;
        }
        for (let i = currentNum; i <= n; ++i) {
            oneOfRes.push(i);
            combineFn(i + 1, k, oneOfRes);
            oneOfRes.pop();
        }
    }
    combineFn(1, k, oneOfRes);
    return res;
};
// @lc code=end

