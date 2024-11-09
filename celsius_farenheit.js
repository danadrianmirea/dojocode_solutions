function cToF(celsius) {
    if (!Number.isInteger(celsius)) {
      return undefined;
    }
   
    return (celsius * 9) / 5 + 32;
  }
   
  function fToC(fahrenheit) {
    if (!Number.isInteger(fahrenheit)) {
      return undefined;
    }
   
    return ((fahrenheit - 32) * 5) / 9;
  }
   
  module.exports = {
    cToF,
    fToC,
  };

  console.log(cToF(5));