let input = process.argv.slice(2);

const reverseString = function (input) {
 for (let i = 0; i < input.length; i++) { 
  let newString = '';
  for (let j = input[i].length - 1; j >= 0; j--) {
    newString += input[i][j];
  }
  console.log(newString);
}
  
};
// console.log(reverseString(process.argv[2]));

// const terminalArgument = process.argv.slice(2);
// const reverseStringOutput = reverseString(terminalArgument);
// console.log('4. ' + reverseStringOutput);
// console.log('5. ' + terminalArgument);

// [ab, xy, qw]