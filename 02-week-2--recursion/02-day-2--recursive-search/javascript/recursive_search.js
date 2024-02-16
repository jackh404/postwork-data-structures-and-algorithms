function recursiveSearch(arr, target) {
  if (!arr.length) {
    return false;
  }
  if (arr[0] === target) {
    return true;
  }
  return recursiveSearch(arr.slice(1), target);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", recursiveSearch([15, 2, 3, 9, 7, 8, 3, 6, 4, 4], 3));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
// pop a value and check if it matches, if so return true
// if arr.length is 0, return false
// call recursiveSearch with altered array
