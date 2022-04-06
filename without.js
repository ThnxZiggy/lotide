
const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second)) {
    console.log(`🤩🤩🤩 Assertion Passed: [${first}] === [${second}]`);
  } else {
    console.log(`😡😵‍💫😰  Assertion Failed: [${first}] !== [${second}]`);
  }
};

const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    let result = false;

    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        result = false;
      } else {
        result = true;
      }
    }
    return result;
  }
};

const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.filter(element => element === source[i])) {
      newArray.push(source[i]);
    }
    return newArray;
  }
};

let source1 = [1, "hello", 3];
without(source1, [1]);
assertArraysEqual(source1, [1, "hello", 3]);
console.log(without(source1, ["hello"]));
// assertArraysEqual([1, "hello", 3], [1, "hello"]);