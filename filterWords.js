function filterWords(input, markers) {
    return input
      .split('\n') // Split the input by lines
      .map(line => {
        // Trim line first to handle cases with only whitespace followed by markers
        line = line.trim();
        let minIndex = line.length;
        
        // Find the earliest occurrence of any marker
        markers.forEach(marker => {
          const markerIndex = line.indexOf(marker);
          if (markerIndex !== -1 && markerIndex < minIndex) {
            minIndex = markerIndex;
          }
        });
        
        // Return the trimmed content up to the marker
        return line.slice(0, minIndex).trim();
      })
      .join('\n') // Join the lines back together
      .trim(); // Trim any trailing newline at the end of the entire result
  }
  
  module.exports = {
    filterWords
  };
  