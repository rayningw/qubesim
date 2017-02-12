//@flow

export const TOP_BOTTOM_BORDER_CHAR = '-';
export const LEFT_RIGHT_BORDER_CHAR = '|';

/** Wraps a multiline string in a rectangular border. */
export function addBorder(content: string): string {
  const lines = content.split('\n');
  const numCharsInLongestLine = lines.reduce((acc, line) => {
    return line.length > acc ? line.length : acc;
  }, 0);
  const borderedLines = lines.map(line => {
    const paddedLine = `${line}${repeatString(numCharsInLongestLine - line.length, ' ')}`;
    return `${LEFT_RIGHT_BORDER_CHAR} ${paddedLine} ${LEFT_RIGHT_BORDER_CHAR}`;
  });
  const topBottomBorder = repeatString(numCharsInLongestLine + 4, TOP_BOTTOM_BORDER_CHAR);
  return [topBottomBorder].concat(borderedLines).concat(topBottomBorder).join("\n");
}

function repeatString(numTimes: number, str: string): string {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  return result;
}
