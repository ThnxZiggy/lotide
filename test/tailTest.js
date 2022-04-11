const tail = require('../tail')
const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');

// const words = ["Hello", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

// const result = (["Hello", "Lighthouse", "Labs"]);
// assertEqual(tail(result), ["Lighthouse", "Labs"]);
// assertEqual(result.length, 3);

describe('#tail', () => {
  it(`should return [2, 3] for [1, 2, 3]`, () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3])
  });

  it(`should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
});