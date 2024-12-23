# Stack Overflow in Recursive Function

This repository demonstrates a common error in JavaScript: stack overflow errors caused by uncontrolled recursion. The `bug.js` file contains a function that recursively calculates a combinatorial number. For larger inputs, this recursion leads to a stack overflow. The `bugSolution.js` file presents a solution using memoization to optimize recursive calls and avoid stack overflow errors.

## How to run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run the code in `bug.js` to observe the stack overflow error for larger inputs (e.g., `foo(20, 20)`).
4. Run the code in `bugSolution.js` to see the memoized version which correctly handles larger inputs.