function rotateArray(arr, k) {
  if (!arr.length || k < 0) return [];
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: [e, f, a, b, c, d]");
  console.log("=>", rotateArray(["a", "b", "c", "d", "e", "f"], 2));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", rotateArray([], 2));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
 * 'k' times:
      pop & unshift
      
  *Explanation:
    Pop removes and returns the last element of an array.
    unshift adds an element to the beginning of an array.
    Using these two methods on the same item effectively 
    "rotates" the array. */
