export function reverseWords(inputString: string): string {
  return inputString.trim().split(/\s+/).reverse().join(" ");
}