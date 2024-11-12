function maximalSquare(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;
  
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    let maxSide = 0;
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] === 1) {
          if (i === 0 || j === 0) {
            dp[i][j] = 1; // On the border, the max square side length is 1 if there's a 1
          } else {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
          }
          maxSide = Math.max(maxSide, dp[i][j]); // Update max side length
        }
      }
    }
  
    return maxSide * maxSide; // Area of the largest square
  }
  
  module.exports = {
    maximalSquare,
  };
  