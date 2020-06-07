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
 * @时间复杂度  O(K*C(K,N)) k为从n中取出的进行组合的k个数字，每次存储答案时需要O(K)的时间复杂度
 * @空间复杂度  O(C(K,N)) 存储答案
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

