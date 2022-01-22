function searchInsert(nums: number[], target: number): number {
  // do a binary search for the index
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const curr = left + Math.floor((right - left) / 2);
    if (nums[curr] === target) {
      return curr;
    }
    if (nums[curr] < target) {
      left = curr + 1;
    } else {
      right = curr - 1;
    }
  }
  // if target wasn't found, return it's insert index
  return left;
}
