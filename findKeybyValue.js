const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  'comedy': "Brooklyn Nine-Nine",
  'drama':  "The Wire"
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😡😵‍💫😰 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const findKeyByValue = function(object, value) {
  for (let key in object) {
  // console.log("key: ", key)
    if (object[key] === value) {
      return key;
    }
  }
};


// const findKeyByValue = function(object, value) {
//   const keys = Object.keys(object)
 
//   const foundKey = keys.find(function (key) {
//     return object[key] === value
//   })
//   console.log("found key: ", foundKey)
//   return Object.keys(object).find(key => object[key] === value);
// }

// console.log(findKeyByValue2(bestTVShowsByGenre, "The Expanse"))




assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");           //should pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);   //should pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That Wire"), "drama");          //should fail
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");          //should fail