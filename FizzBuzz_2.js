function fizzBuzz(number) {
  var result = "";
  if (number % 3 == 0) {
    result += "Fizz";
  }
  if (number % 5 == 0) {
    result += "Buzz";
  }
  if (result == "") {
    return number;
  } else {
    return result;
  }
}

module.exports = {
  fizzBuzz,
};