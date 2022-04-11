const middle = require('../middle.js');
const assert = require('chai').assert;
//const assertArraysEqual = require('../assertArraysEqual');

//let input = ["start", "second", "middle", "secondMiddle", "fourth", 5]

describe('#ta#middle', () => {
  it(`should return [2, 3] for [1, 2, 3]`, () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });

  it(`should return ["Lighthouse"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"])
  });
});