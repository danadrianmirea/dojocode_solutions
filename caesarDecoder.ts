export function caesarCipherDecoder(text: string, shift: number): string {
    shift = shift % 26;
  
    let result = "";
  
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
  
      if (char >= "A" && char <= "Z") {
        let newChar = String.fromCharCode(
          ((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65,
        );
        result += newChar;
      } else if (char >= "a" && char <= "z") {
        let newChar = String.fromCharCode(
          ((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97,
        );
        result += newChar;
      } else {
        result += char;
      }
    }
  
    return result;
  }