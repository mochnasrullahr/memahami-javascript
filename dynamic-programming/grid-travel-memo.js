var count = 0;
const gridTravel = (x, y, memo = {}) => {
  const quad = x + ',' + y;
  const key2 = y + ',' + x;
  if (quad in memo) return memo[quad];
  if (key2 in memo) return memo[key2];
  if (x <= 0 || y <= 0) return 0;
  if (x === 1 && y === 1) return 1;
  count++;
  memo[quad] = gridTravel(x - 1, y, memo) + gridTravel(x, y - 1, memo);
  return memo[quad];
}

// console.log(gridTravel(4, 4)); //
// console.log(gridTravel(1, 1)); //
// console.log(gridTravel(2, 3)); // 3
// console.log(gridTravel(3, 2)); // 3
// console.log(gridTravel(3, 3)); // 6
console.log(gridTravel(10, 10)); // 48620
// console.log(gridTravel(18, 18)); // 2333606220
// console.log(gridTravel(30, 30)); // 2333606220
console.log(count)