const assertArraysEqual = function(first, second) {
  if (first === second) {
    console.log(`🤩🤩🤩 Assertion Passed: [${first}] === [${second}]`);
  } else {
    console.log(`😡😵‍💫😰  Assertion Failed: [${first}] !== [${second}]`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))

// const eqArrays = function(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   } else {
//     let result = false;
//     for (let i = 0; i < first.length; i++) {
//       if (first[i] !== second[i]) {
//         result = false;
//       } else {
//         result = true;
//       }
//     }
//     return result;
//   }
// };


assertArraysEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');

assertArraysEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), 'elBulli'); // should fail since elBulli is not first key

assertArraysEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), 'Akaleri'); // should pass since 'akaleri' is first key