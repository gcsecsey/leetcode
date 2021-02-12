function numberOfSteps(num: number): number {
  let steps: number = 0;
  let number: number = num;
  while (number > 0) {
    // even numbers have 0 at the end so logical "and" returns 0
    if (number & 1) {
      number--;
    } else {
      // bitwise right discards the lowest bit
      number = number >> 1;
    }
    steps++;
  }

  return steps;
}
