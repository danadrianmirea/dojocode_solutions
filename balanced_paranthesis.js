function areParenthesesBalanced(str) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "(") {
        count++;
      } else if (str[i] == ")") {
        count--;
      }
    }
  
    return count == 0;
  }
  
  module.exports = {
    areParenthesesBalanced,
  };