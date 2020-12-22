const gridTravel = (x, y) => {
  if (x <= 0 || y <= 0) return 0;
  if (x === 1 && y === 1) return 1;

  
  return gridTravel(x - 1, y) + gridTravel(x, y - 1);
}

console.log(gridTravel(1, 1)); //
console.log(gridTravel(2, 3)); // 3
console.log(gridTravel(3, 2)); // 3
console.log(gridTravel(3, 3)); // 6
console.log(gridTravel(10, 10)); // 48620
console.log(gridTravel(18, 18)); // 2333606220