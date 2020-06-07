/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * @时间复杂度 O(N*N!)
 * @空间复杂度 O(N*N!)
 */
var permute = function (nums) {
    let res = [];
    let oneOfRes = [];
    function permuteFn(nums, oneOfRes) {
        if (oneOfRes.length === nums.length) {
            res.push(Array.from(oneOfRes));
            return;
        }
        for (let i = 0; i < nums.length; ++i) {

            if (oneOfRes.indexOf(nums[i]) !== -1) {
                continue;
            }
            oneOfRes.push(nums[i]);
            permuteFn(nums, oneOfRes);
            oneOfRes.pop();
        }
    }
    permuteFn(nums, oneOfRes);
    return res;
};
// @lc code=end

