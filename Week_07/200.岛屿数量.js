/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (grid.length <= 0) {
        return 0;
    }
    let island = 0;
    let length = grid[0].length - 1;
    let width = grid.length - 1;
    for (let i = 0; i <= width; ++i) {
        for (let j = 0; j <= length; ++j) {
            if (grid[i][j] === '1') {
                ++island;
                searchIsland(grid, i, j); 
            }
        }
    }
    function searchIsland(grid, i, j) {
        if (i > width || j > length || i < 0 || j < 0 || grid[i][j] === '0') {
            return;
        }
        grid[i][j] = '0';
        searchIsland(grid, i, j + 1);
        searchIsland(grid, i, j - 1);
        searchIsland(grid, i + 1, j);
        searchIsland(grid, i - 1, j);
    }
    return island;
};
// @lc code=end

