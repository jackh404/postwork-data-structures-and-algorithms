function findShortestStringRecursive(arr) {
  if(arr.length < 2) return arr[0]
  if(arr[0].length > arr[1].length){
    return findShortestStringRecursive(arr.slice(1))
  } else{ 
    arr.splice(1,1)
    return findShortestStringRecursive(arr)
  }
}
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));

  console.log("Expecting: 'if'");
  console.log("=>", findShortestStringRecursive(['flower', 'if', 'juniper', 'lily', 'dandelion', 'do']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
Recursively find the (first) shortest string in an array.

if the array only has one string, return it
else
compare the first two strings of the array
call the function with the longer of the two strings (or the second one if they are of equal length) removed
*/
