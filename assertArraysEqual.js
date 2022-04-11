
const eqArrays = require('./eqArrays');
const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second)) {
    console.log(`🤩🤩🤩 Assertion Passed: [${first}] === [${second}]`);
  } else {
    console.log(`😡😵‍💫😰  Assertion Failed: [${first}] !== [${second}]`);
  }
};

module.exports = assertArraysEqual