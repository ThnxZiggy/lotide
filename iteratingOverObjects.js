for (var i = 0; i < 10; i++) {
// //this iterates through arrays
  console.log(someArray[i])
}

//need to use For In loop to iterate through objects

var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};

//using a for in loop

for (var i in planetMoons) {
  var numOfMoons = planetMoons[i];
  console.log(`The planet ${i} has ${numOfMoons} moons`);
};

//objects can sometimes have properties that they inherit from their prototype chain as well as method names. 
//An additional filtering step is sometimes necessary:
for (var planet in planetMoons) {
  // additional filter for object properties:
  if (planetMoons.hasOwnProperty(planet)) {
    //  ...
  }
}