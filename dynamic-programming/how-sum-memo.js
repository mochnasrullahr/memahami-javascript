const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const reminder = targetSum - num;
    const result = howSum(reminder, numbers, memo);
    if (Array.isArray(result)) {
      memo[targetSum] = [...result, num];
      return memo[targetSum];
    }
    // if (result !== null) {
    //   return [...result, num];
    // }
  }
  memo[targetSum] = null;
  return null;
}

// m = target sum
// n = numbers.length

// Brute Force
// time: O(n^m * m)
// space: O(m)
//
// Memoized
// time: O(n*m*2)
// space: O(m^2)

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null