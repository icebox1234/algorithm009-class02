/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 * @description 模拟十进制加一，需要处理好每一位的进位与否，当到达最高位仍然需要进位时，需要在数组最前面加入一个1。
 * @description 算法复杂度 O(N)：遍历整个数组O(N)、在数组最前面加一O(N)
 */
var plusOne = function (digits) {
    let plus = true;
    for (let i = digits.length - 1; i >= 0; --i) {
        if (plus) {
            if (digits[i] + 1 > 9) {
                digits[i] = 0;
            } else {
                digits[i]++;
                plus = false;
            }
        } else {
            break;
        }
    }
    if (plus) {
        digits.unshift(1);
    }
    return digits;
};
// @lc code=end

