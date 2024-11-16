function vowelIndices(word) {
  const vowels = "aeiouAEIOU";
  const indices = [];

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      indices.push(i + 1);
    }
  }

  return indices;
}

module.exports = {
  vowelIndices,
};