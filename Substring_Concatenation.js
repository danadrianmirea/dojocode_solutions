function findSubstring(s, words) {
  if (!s || !words || words.length === 0) return [];

  const wordLength = words[0].length;
  const wordsCount = words.length;
  const substringLength = wordLength * wordsCount;
  const result = [];

  const wordMap = {};
  words.forEach(word => {
    wordMap[word] = (wordMap[word] || 0) + 1;
  });

  for (let i = 0; i <= s.length - substringLength; i++) {
    const seenWords = {};
    let j = 0;

    while (j < wordsCount) {
      const wordIndex = i + j * wordLength;
      const word = s.slice(wordIndex, wordIndex + wordLength);

      if (!wordMap[word]) break;

      seenWords[word] = (seenWords[word] || 0) + 1;

      if (seenWords[word] > wordMap[word]) break;

      j++;
    }

    if (j === wordsCount) {
      result.push(i);
    }
  }

  return result;
}

module.exports = {
  findSubstring,
};