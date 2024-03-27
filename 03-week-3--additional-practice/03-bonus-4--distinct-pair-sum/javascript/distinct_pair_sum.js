function distinctPairSum(arr, k) {
  const outputArray = [];
  arr.forEach((e, i) => {
    if (e + arr[i + 1] === k) {
      if (!outputArray.find(sub => sub.indexOf(e) >= 0)) {
        outputArray.push([e, arr[i + 1]]);
      }
    }
  });
  return outputArray;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", distinctPairSum([], 1));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", distinctPairSum([2, 8, 6, 1, 4, 7, 5], 2));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
/* Return an array of arrays. The inner arrays
 * should be pairs of consecutive numbers that add
 * up to a given value. The inner arrays should not
 * be repeated, including in a different order.
 * ie, [2,8] for 10 is the same as [8,2]
 *
 * create blank outputArray
 * Loop through array
 *  check if array[n] + array[n+1] === k
 *    if so, check if array[n] is in any array in outputArray
 *      if not, add [array[n],array[n+1]] to outputArray
 * return outputArray
 *  */
