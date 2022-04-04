const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😡😵‍💫😰  Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = function(array) {
  let newArray = [];
  for (let i = array[1]; i <= array.length; i++) {
    newArray.push(i);
  } return newArray;
};

const words = ["Hello", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(result.length, 3);