function search(nums: number[], target: number): number {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const middle = low + Math.floor((high - low) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
}
