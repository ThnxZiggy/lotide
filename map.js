// Need explanation on below - W1D4_implementMap
// Note that the code above is only showing the map function, but our full map.js file will contain other code outside the function that is not shown above.
// The important bit above is that our map (higher-order) function can call the callback function. This callback function is the one that is passed in as its second argument and conveniently called callback.
// Since map is passing in the original item to it, our test code which calls map knows to pass in a callback function which accepts that one and only argument.

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

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

const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second)) {
    console.log(`🤩🤩🤩 Assertion Passed: [${first}] === [${second}]`);
  } else {
    console.log(`😡😵‍💫😰  Assertion Failed: [${first}] !== [${second}]`);
  }
};


const testArray2 = [1, 2, 3];
const testArray3 = [3, 2, 1];


assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(testArray2, num => num * 2), [2, 4, 6]);
assertArraysEqual(map(testArray3, num => num > 2), [true, false, false]);

//Need further clarify on 'Write test cases using at least three different ways of using map.' despite boilerplate tests passing