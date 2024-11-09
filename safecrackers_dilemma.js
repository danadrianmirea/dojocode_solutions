function getSafeCrackVariations(pin) {
    const adjacencyMap = {
      1: ["1", "2", "4"],
      2: ["1", "2", "3", "5"],
      3: ["2", "3", "6"],
      4: ["1", "4", "5", "7"],
      5: ["2", "4", "5", "6", "8"],
      6: ["3", "5", "6", "9"],
      7: ["4", "7", "8"],
      8: ["5", "7", "8", "9", "0"],
      9: ["6", "8", "9"],
      0: ["8", "0"],
    };
  
    const generateVariations = (pinArray, index, currentVariation) => {
      if (index === pinArray.length) {
        return [currentVariation];
      }
  
      const currentDigit = pinArray[index];
      const possibleDigits = adjacencyMap[currentDigit];
  
      let variations = [];
  
      for (let digit of possibleDigits) {
        variations = variations.concat(
          generateVariations(pinArray, index + 1, currentVariation + digit),
        );
      }
  
      return variations;
    };
  
    return generateVariations(pin.split(""), 0, "");
  }
  
  module.exports = {
    getSafeCrackVariations,
  };