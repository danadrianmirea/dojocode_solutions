function groupAnagrams(words) {
  const anagramMap = new Map();

  for (let word of words) {
    const sortedWord = word.split("").sort().join("");

    if (anagramMap.has(sortedWord)) {
      anagramMap.get(sortedWord).push(word);
    } else {
      anagramMap.set(sortedWord, [word]);
    }
  }

  return Array.from(anagramMap.values());
}

module.exports = {
  groupAnagrams,
};