export const minimumDifference = (nums) => {
  let minDiff = Infinity;

  // If it only one pair then directly returns the diff
  if (nums.length === 2) {
    return Math.abs(nums[0] - nums[1]);
  }

  function partition(nums, index, sum1, sum2) {
    if (index === nums.length) {
      minDiff = Math.min(minDiff, Math.abs(sum1 - sum2));
      return;
    }
    // Add current number to the first sum
    partition(nums, index + 1, sum1 + nums[index], sum2);

    // Add current number to the second sum
    partition(nums, index + 1, sum1, sum2 + nums[index]);
  }

  partition(nums, 0, 0, 0);
  return minDiff;
};
