const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum == 0) return true;
  if (targetSum < 0) return false;

  toRet = false;
  for (num of numbers) {
    const reminder = targetSum - num;
    memo[reminder] = canSum(reminder,numbers, memo)
    if (memo[reminder]) {
      return true;
    }
  }
  return false;
}

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false