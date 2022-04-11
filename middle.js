//write code that takes an array and returns the middle element
//if array.length is < 2, return empty array
//if array.length % 2 === 0, return middle 2 elements
//if array.length % 2 !== 0, return middle element

const middle = function(input) {
  if (input.length <= 2) {
    return [];
  } 
  if (input.length % 2 === 1) {
    return [input[Math.floor(input.length / 2)]];
  }
  if (input.length % 2 === 0) {
    return [input[input.length / 2 - 1], input[input.length / 2]] 
  }
};
module.exports = middle

// OLD SOLUTION
//   const middle = function(input) {
//   let middleArray = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input.length < 1) {
//       middleArray = [];
//     } else if (input.length % 2 !== 0) {
//       middleArray = [input[Math.floor(input.length / 2)]];
//     } else if (input.length % 2 === 0) {
//       middleArray[0] = input[Math.floor(input.length / 2)]
//       middleArray[1] = input[Math.floor(input.length / 2 - 1)]
//     }
//     // middleArray.push(input[i]);
//   }
//   return middleArray
// };
// 