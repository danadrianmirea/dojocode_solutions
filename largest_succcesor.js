function arrangeToNextBigger(number) {
    let digits = number.toString().split("");
  
    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
      i--;
    }
  
    if (i === -1) {
      return null; // No bigger number can be formed
    }
  
    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
      j--;
    }
  
    [digits[i], digits[j]] = [digits[j], digits[i]];
  
    let rightPart = digits.slice(i + 1).sort();
    digits = digits.slice(0, i + 1).concat(rightPart);
  
    return parseInt(digits.join(""), 10);
  }
  
  module.exports = {
    arrangeToNextBigger,
  };