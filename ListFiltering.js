function getNumbersFromList(list) {
  return list.filter(item => typeof item === "number");
}

module.exports = {
  getNumbersFromList,
};