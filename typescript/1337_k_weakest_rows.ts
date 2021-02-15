function kWeakestRows(mat: number[][], k: number): number[] {
  const power = (row: number[]) => {
    let count = 0;
    for (let elem of row) {
      if (elem === 0) {
        return count;
      }
      count++;
    }
    return count;
  };

  const powers: { [x: number]: number } = mat.reduce((acc, curr, ind) => {
    acc[ind] = power(curr);
    return acc;
  }, {});

  return Object.keys(powers)
    .sort((a, b) => powers[a] - powers[b])
    .map(Number)
    .slice(0, k);
}
