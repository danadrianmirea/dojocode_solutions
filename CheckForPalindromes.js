function isPalindrome(input) {
  var newString = "";
  input = input.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

  for (var i = input.length - 1; i >= 0; i--) {
    newString += input[i];
  }

  return newString == input;
}

module.exports = {
  isPalindrome,
};