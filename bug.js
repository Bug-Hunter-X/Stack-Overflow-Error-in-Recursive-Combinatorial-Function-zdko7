function foo(a, b) {
  if (a === 0) {
    return 0;
  }
  if (b === 0) {
    return 1;
  }
  return foo(a - 1, b - 1) + foo(a, b - 1);
}
console.log(foo(5, 5)); // This will cause a stack overflow error for larger inputs