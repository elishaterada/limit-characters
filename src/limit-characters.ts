interface LimitCharacters {
  text: string;
  length?: number;
  breakWord?: boolean;
  more?: string;
}

const limitCharacters = ({text, length = 144, breakWord = true, more = '...'}: LimitCharacters): string => {
  // Always return string back
  if (!text) return "";

  // Short-circuit
  if (text?.length < length) return text;

  // Trim by length only
  const trimmedText = text.slice(0, length - more?.length)
  if (breakWord) return `${trimmedText}${more}`;

  // Trim by words
  const words = trimmedText.split(" ");
  if (words?.length > 1) {
    const trimmedWords = words?.slice(0, words?.length - 1).join(" ")
    return `${trimmedWords}${more}`
  }

  // Fallback
  return text;
};

export default limitCharacters;
export { LimitCharacters }
