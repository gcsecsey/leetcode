function scoreOfParentheses(S: string): number {
  return [...S]
    .reduce(
      (stack, c) => {
        if (c === "(") {
          stack.push(0);
        } else {
          const v = stack.pop();
          const w = stack.pop();
          stack.push(w + Math.max(2 * v, 1));
        }
        return stack;
      },
      [0]
    )
    .pop();
}
