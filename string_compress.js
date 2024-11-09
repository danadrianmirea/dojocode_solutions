function compressString(s) {
    if (s.length === 0) {
      return s;
    }
  
    let compressed = [];
    let count = 1;
  
    for (let i = 1; i < s.length; i++) {
      if (s[i] === s[i - 1]) {
        count++;
      } else {
        compressed.push(s[i - 1] + count);
        count = 1;
      }
    }
  
    compressed.push(s[s.length - 1] + count);
  
    const compressedString = compressed.join("");
  
    return compressedString.length < s.length ? compressedString : s;
  }
  
  module.exports = {
    compressString,
  };