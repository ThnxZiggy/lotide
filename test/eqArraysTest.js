const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, "hello", 3], [1, "hello", 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 36]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 36]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([], []), false); // => should PASS