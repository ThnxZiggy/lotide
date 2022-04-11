const tail = require('../tail')
const assertEqual = require('../assertEqual');

const words = ["Hello", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = (["Hello", "Lighthouse", "Labs"]);
assertEqual(tail(result), ["Lighthouse", "Labs"]);
assertEqual(result.length, 3);