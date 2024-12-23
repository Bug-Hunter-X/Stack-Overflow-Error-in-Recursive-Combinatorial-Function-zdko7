function foo(a, b, memo = {}) {
  if (a === 0) {
    return 0;
  }
  if (b === 0) {
    return 1;
  }
  const key = `${a},${b}`;
  if (key in memo) {
    return memo[key];
  }
  memo[key] = foo(a - 1, b - 1, memo) + foo(a, b - 1, memo);
  return memo[key];
}
console.log(foo(5, 5)); // Correctly calculates the result without stack overflow
console.log(foo(20, 20)); // Handles larger inputs without stack overflow