function generatePascalsTriangle(numRows) {
    const triangle = [];
  
    for (let row = 0; row < numRows; row++) {
      const newRow = [];
  
      for (let col = 0; col <= row; col++) {
        if (col === 0 || col === row) {
          newRow.push(1);
        } else {
          newRow.push(triangle[row - 1][col - 1] + triangle[row - 1][col]);
        }
      }
  
      triangle.push(newRow);
    }
  
    return triangle;
  }
  
  module.exports = {
    generatePascalsTriangle,
  };