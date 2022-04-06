const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😡😵‍💫😰 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function (string) {
  const letterCount = {};
  for (const letter of string) {
    if (letterCount.hasOwnProperty(letter)) {
      letterCount[letter] ++;
    }
    else {
      letterCount[letter] = 1;
    }
  }
  delete letterCount[" "];
  return letterCount;
}


console.log(countLetters("Hi my name is Andrew"));