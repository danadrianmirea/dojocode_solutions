export function convertBinaryToText(binaryInput: string): string {
  if (!binaryInput.trim()) {
    return "Input cannot be empty.";
  }

  binaryInput = binaryInput.trim();

  const binaryArray = binaryInput.split(" ");

  for (let binary of binaryArray) {
    if (binary.length !== 8 || !/^[01]+$/.test(binary)) {
      return "Invalid binary input.";
    }
  }

  const textOutput = binaryArray
    .map(binary => String.fromCharCode(parseInt(binary, 2)))
    .join("");

  return textOutput;
}

export function convertTextToBinary(textInput: string): string {
  if (!textInput.trim()) {
    return "Input cannot be empty.";
  }

  const binaryOutput = textInput
    .split("")
    .map(char => {
      return char.charCodeAt(0).toString(2).padStart(8, "0");
    })
    .join(" ");

  return binaryOutput;
}