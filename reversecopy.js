let newString = '';
const reverseString = function (input) {
  
  console.log('2. before + ,' + newString)
 for (let j = 0; j < input.length; j++) { 
   console.log("2.a - hello")
  for (let i = input[j].length - 1; i >= 0; i--) {
    console.log("2.b- "+ input[i] + " , " + input[j] +", " + newString)
    newString += input[i];
    console.log('3. after + ,' + input[i] + " , " + input[j] +", " + newString);
  }
}
  return newString;
};
console.log('1. outside + ,' + newString);
// console.log(reverseString(process.argv[2]));

// const terminalArgument = process.argv.slice(2);
const terminalArgument = ['ab'];
const reverseStringOutput = reverseString(terminalArgument);
console.log('4. ' + reverseStringOutput);
console.log('5. ' + terminalArgument);

// [ab, xy, qw]