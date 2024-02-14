function findFirstDuplicate(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr.slice(0, i).includes(arr[i])) return arr[i];
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");
  console.log("Expecting: 5");
  console.log("=>", findFirstDuplicate([5, 2, 2, 5]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
 ** iterate through the array
 **  if value previously read
 **   return current
 ** return -1
 **/
