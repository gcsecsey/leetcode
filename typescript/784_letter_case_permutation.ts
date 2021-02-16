export function letterCasePermutation(S: string): string[] {
  const res: string[] = [];

  // create a helper function to recursively iterate through the string
  const helper = (index, subStr) => {
    if (index === S.length) {
      // if we reached the end of the string, end the recursion
      res.push(subStr);
      return;
    }

    if (parseInt(S[index]) >= 0) {
      // if the current char is a number
      // append it and go to the next char
      helper(index + 1, subStr + S[index]);
    } else {
      // if the current char is not a number
      // recursively call the helper for both versions

      // append lowercase version of current char and go to the next char
      helper(index + 1, subStr + S[index].toLowerCase());

      // append uppercase version of current char and go to the next char
      helper(index + 1, subStr + S[index].toUpperCase());
    }
  };

  helper(0, "");
  return res;
}
