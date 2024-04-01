function consecutiveSubstrings(string) {
  const arr = [];
  for (let i = 0; i < string.length; i++) {
    for (let k = i + 1; k < string.length + 1; k++) {
      arr.push(string.slice(i, k));
    }
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(""));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution

/* Given an input string, output all possible substrings consisting of
 * consecutive characters.

 * Loop through string (pos)
    * loop through all letters after current letter (pos2)
    *    output string from pos to pos2*/
