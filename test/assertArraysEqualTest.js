const assertArraysEqual = require('../assertArraysEqual.js')
const assertEqual = require('../assertEqual');

// eqArrays([1, 2, 3], [1, 3, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => false

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, "hello", 3], [1, "hello", 3]); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 36]), true); // => should FAIL
// assertEqual(eqArrays([1, 2, 3], [1, 2, 36]), false); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should FAIL
// assertEqual(eqArrays([], []), false); // => should PASS