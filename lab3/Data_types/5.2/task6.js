function randomInteger(min, max) {
  // Generate a random number in the range [min, max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
console.log(randomInteger(1, 5)); // could be 1
console.log(randomInteger(1, 5)); // could be 3
console.log(randomInteger(1, 5)); // could be 5
