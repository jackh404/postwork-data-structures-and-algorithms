function selectionSortRecursive(arr) {
  let min = Math.min(...arr)
  let i = arr.indexOf(min)
  if(arr.length>1)
  {
    return arr.splice(i,1).concat(selectionSortRecursive(arr))
  } else {
    return arr.splice(i,1)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-20, 0, 7, 75, 175]");
  console.log("=>", selectionSortRecursive([75, 0, 175, -20, 7]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Create a recursive function that uses selection sort to sort an input array

/* create higher scope var for output if none exists
  return output if arr is empty
  find min value, push to output
  call function on arr missing the chosen value */