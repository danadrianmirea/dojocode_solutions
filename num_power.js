function power (number) {
    let stack = [];
    let out = "";
    while(number)
    {
      var digit = number % 10;
      //out = out*10 + digit*digit;
      stack.push(digit*digit);
      number = Math.floor(number / 10);
    }
    // 1234      16 9 4 1 
    while(stack.length>0) {
        out += stack.pop();
    }

    return out;
  }
  
  
  module.exports = {
    power
  };
  
  console.log(power(1234));