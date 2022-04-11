

const tail = function(array) {
  let newArray = [];
  for (let i = array[1]; i < array.length; i++) {
    newArray.push(i);
  } return newArray;
};



module.exports = tail;