function filterWords(input, markers) {
  return input
    .split("\n")
    .map(line => {
      line = line.trim();
      let minIndex = line.length;

      markers.forEach(marker => {
        const markerIndex = line.indexOf(marker);
        if (markerIndex !== -1 && markerIndex < minIndex) {
          minIndex = markerIndex;
        }
      });

      return line.slice(0, minIndex).trim();
    })
    .join("\n")
    .trim();
}

module.exports = {
  filterWords,
};