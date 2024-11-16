function findShort(text) {
  return Math.min(...text.split(" ").map(word => word.length));
}

module.exports = {
  findShort,
};