function diffArr(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
  
    const diff1 = arr1.filter(item => !set2.has(item));
    const diff2 = arr2.filter(item => !set1.has(item));
  
    const result = [...diff1, ...diff2].sort((a, b) => a - b);
  
    return result;
  }
  
  module.exports = {
    diffArr,
  };