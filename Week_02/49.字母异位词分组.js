/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 * @时间复杂度 O(NK)
 * @空间复杂度 O(NK)
 */
var groupAnagrams = function (strs) {
    let map = {};
    let res = [];
    for (let i = 0; i < strs.length; ++i) {
        if (!map.hasOwnProperty(strs[i].split('').sort().join())) {
            map[strs[i].split('').sort().join()] = [strs[i]];
        } else {
            map[strs[i].split('').sort().join()].push(strs[i]);
        }
    }
    Object.keys(map).forEach(item => {
        res.push(map[item]);
    });
    return res;
};
// @lc code=end

