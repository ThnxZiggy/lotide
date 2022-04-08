const takeUntil = function(array, callback) {
  let newArray = [];
  for (let value of array) {
    if (callback(value)) {
      return newArray;
    }
    newArray.push(value); //--------Original attempt 1 - this doesn't seem to capture all edge cases, discuss with mentor
  }
  return newArray;
};
// let newArray = []    -------------- ORIGINAL ATTEMPT 2
// const takeUntil = (array, callback) => {
//   array.forEach(element => {
//     newArray.push(element)
//   })
// }
// console.log(newArray);


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Expected Output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

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

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);