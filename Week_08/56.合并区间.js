/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort( (a,b)=> a[0]-b[0])
    for( let i=0; i<intervals.length-1; i++){
        const a2 = intervals[i][1],
              b1 = intervals[i+1][0],
              b2 = intervals[i+1][1];
        if( a2 >= b1 ){
            intervals[i][1] = a2 > b2 ? a2 : b2
            intervals.splice(i+1,1)
            i--
        }
    }
    return intervals
};

// @lc code=end

