/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * @时间复杂度 O(N*N!)
 * @空间复杂度 O(N*N!)
 */
var permuteUnique_1 = function (nums) {
    let res = [];
    let oneOfRes = [];
    let resString = [];
    function permuteUniqueFn(nums, ignore, oneOfRes) {
        if (oneOfRes.length === nums.length) {
            if (resString.indexOf(oneOfRes.toString()) === -1) {
                res.push(Array.from(oneOfRes));
                resString.push(oneOfRes.toString());
            }
            return;
        }
        for (let i = 0; i < nums.length; ++i) {
            if (ignore.indexOf(i) !== -1) {
                continue;
            }
            oneOfRes.push(nums[i]);
            ignore.push(i);
            permuteUniqueFn(nums, ignore, oneOfRes);
            ignore.pop();
            oneOfRes.pop();
        }
    }
    permuteUniqueFn(nums, [], oneOfRes);
    return res;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 * @时间复杂度 O(N*N!)
 * @空间复杂度 O(N*N!)
 */
var permuteUnique = function (nums) {
    let res = [];
    let oneOfRes = [];
    let used = Array.from({ length: nums.length }).fill(0);
    nums.sort((a, b) => {
        return a - b;
    })
    function permuteUniqueFn(nums, used, oneOfRes) {
        if (oneOfRes.length === nums.length) {
            res.push(Array.from(oneOfRes));
            return;
        }
        for (let i = 0; i < nums.length; ++i) {
            if (used[i]) {
                continue;
            }
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue;
            }
            oneOfRes.push(nums[i]);
            used[i] = 1;
            permuteUniqueFn(nums, used, oneOfRes);
            used[i] = 0;
            oneOfRes.pop();
        }
    }
    permuteUniqueFn(nums, used, oneOfRes);
    return res;
};
// @lc code=end

