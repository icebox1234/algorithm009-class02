/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var max = 0;
    var left = 0;
    var right = 0;
    for(var i = 0;i < s.length;i++){
        if(s[i] === '('){
            left++;
        }else{
            right++;
        }
        if( left === right){
            max = Math.max(max,2 * left);
        }else if(right > left){
            left = right = 0;
        }
    }
    left = right = 0;
    for(var i = s.length-1;i >= 0;i--){
        if(s[i] === '('){
            left++;
        }else{
            right++;
        }
        if(left === right){
            max = Math.max(max,right * 2);
        }else if(left > right){
            left = right = 0;
        }
    }
    return max;
};
// @lc code=end