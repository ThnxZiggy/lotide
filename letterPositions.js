// write function that returns an object
// each unique letter will be added a new key to a blank object
// every index the unique letter appears is logged to that individual key

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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character !== " ") {
      let characterPositionArray = results[character];
      if (characterPositionArray === undefined) {
        results[character] = [];
      }
      results[character].push(i);
    }
  }
  return results;
};

console.log(letterPositions("hello"));


assertArraysEqual(letterPositions("hello").e, [1]);