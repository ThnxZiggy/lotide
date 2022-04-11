

const eqArrays = function(first, second) {      // function taking two arguments as arrays
  if (first.length !== second.length) {         // if the lengths of arrays are different return false
    return false;
  } else {
    let result = false;                         // if the lenghts are the same, keep comparison result as false for now unless proven otherwise

    for (let i = 0; i < first.length; i++) {    // go through all the elements in first array since we have confirmed they are the same length
      if (first[i] !== second[i]) {             // if values at the same index i for both arrays are different
        result = false;                         // then our comparison result is false
      } else {                                  // else they must be the same to come to this line
        result = true;                          // which means they share the same data and are true.
      }
    }
    // console.log(result)                      // checking whether arguments passed in the eqArrays works
    return result;
    
    
  }
};

module.exports = eqArrays;

// eqArrays([1, 2, 3], [1, 3, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => false

