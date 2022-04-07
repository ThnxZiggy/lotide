const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😡😵‍💫😰 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if ((keys1.length === keys2.length) && keys1.every((key) => {
    return object1[key] === object2[key];
  })) {
    return true;
  }
  return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`🤩🤩🤩 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`😡😵‍💫😰 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};
assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});
assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 2});
assertObjectsEqual({a: 1, b: 2}, {b: 1, a: 2, c: 3});