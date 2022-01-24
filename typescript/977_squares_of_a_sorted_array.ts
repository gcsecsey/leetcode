function sortedSquares(nums: number[]): number[] {
  const result = [];

  // iterate with two pointers towards the middle
  let left = 0;
  let right = nums.length - 1;

  // add the higher square to the front
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result.unshift(nums[left++] ** 2);
    } else {
      result.unshift(nums[right--] ** 2);
    }
  }
  return result;
}
