const bestSum = (targetSum, numbers) => {
  if (targetSum == 0) return [];
  if (targetSum < 0) return null;

  let shortestComb = null;

  for (let num of numbers) {
    const reminder = targetSum - num;
    const result = bestSum(reminder, numbers);
    if (result !== null) {
      const combination = [...result, num];
      if (shortestComb == null || combination.length < shortestComb.length) {
        shortestComb = combination
      }
    }
  }

  return shortestComb;
};

// m = targetSum
// n = numbers.length

// Brute Force
// time: O(n^m * m)
// space: O(m^2)

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(50, [1, 2, 5, 25])); // [25, 25, 25, 25]