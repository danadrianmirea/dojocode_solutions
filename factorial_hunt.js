function nthFibonacci(n) {
    if (!Number.isInteger(n)) return undefined;
  
    if (n === 0) {
      return n;
    }
  
    if (n < 2) {
      return 1;
    }
  
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
  }
  
  module.exports = {
    nthFibonacci,
  };